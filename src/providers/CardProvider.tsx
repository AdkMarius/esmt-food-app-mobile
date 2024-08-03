import React, {createContext, PropsWithChildren, useContext, useState} from "react";
import {CartItem, InsertTables, Tables} from "@/src/lib/types";
import { randomUUID } from "expo-crypto";
import {useRouter} from "expo-router";
import {insertOrders} from "@/src/api/orders";
import {useAuth} from "@/src/providers/AuthProvider";
import {insertOrderItems} from "@/src/api/order-items";
import {updateBalanceUser} from "@/src/api/account";
import {Alert} from "react-native";

type Product = Tables<'products'>

type CartType = {
    items: CartItem[];
    addItem: (product: Product) => void;
    passOrder: (price: number) => Promise<boolean | undefined>;
    updateQuantity: (itemId: string, amount: -1 | 1) => void
    total_price: number,
    checkout: () => void;
}

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
    total_price: 0,
    checkout: () => {},
    passOrder: async (price: number) => {
        return false;
    },
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const router = useRouter();

    const { session, setBalance} = useAuth();

    const addItem = (product: Product) => {
        // if already in cart, increment quantity
        const existingItem = items.find(item =>
            item.product_id === product.id);

        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return;
        }

        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            product_id: product.id,
            quantity: 1
        }

        setItems([newCartItem, ...items]);
    }

    // updateQuantity function
    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        const updatedItems = items.map((item) =>
            item.id !== itemId
                ? item
                : { ...item, quantity: item.quantity + amount}
        ).filter((item) => item.quantity > 0);

        setItems(updatedItems);
    }

    const total_price = items.reduce(
        (sum, item) => (sum += item.product.price * item.quantity),
        0
    );

    const clearCart = () => {
        setItems([]);
    }

    const checkout = async () => {
        const newOrder: InsertTables<'orders'> = {
            total_price: total_price,
            user_id: session?.id as string
        };

        const res = await insertOrders(newOrder);
        if (res.data) {
            const response = await saveOrderItems(res.data[0]);
            if (response)
                clearCart();

            Alert.alert('Succès', 'Commande effectuée avec succès');

            router.navigate('/historic');
        }

        return res.data;
    };

    const passOrder = async (price: number) => {
        try {
            const res = await updateBalanceUser(session?.id as string, price);

            if (res) {
                setBalance(res.data[0].balance);
                return true;
            }
            return false;
        } catch (error) {
            Alert.alert('Error', 'Veuillez réessayer svp.');
        }
    }

    const saveOrderItems = async (order: Tables<'orders'>) => {
        const orderItems = items.map((cartItem) => ({
            product_id: cartItem.product_id,
            order_id: order.id,
            quantity: cartItem.quantity,
        }));

        const res = await insertOrderItems(orderItems);
        return res.data;
    };


    return (
      <CartContext.Provider
          value={{ items, addItem, updateQuantity, passOrder, total_price, checkout }}
      >
          { children }
      </CartContext.Provider>
    );
}

export default CartProvider;

export const useCart = () => useContext(CartContext);