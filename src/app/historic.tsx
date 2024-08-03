import React, { useEffect, useState } from "react";
import {SafeAreaView, StyleSheet, ActivityIndicator, FlatList, Alert} from "react-native";
import { Colors } from "@/src/constants/Colors";
import Historic from "@/src/components/Historic";
import { supabase } from "@/src/lib/supabaseClient";
import AntDesign from '@expo/vector-icons/AntDesign';
import {useQuery} from "@tanstack/react-query";
import {useAuth} from "@/src/providers/AuthProvider";
import UserNotLogin from "@/src/components/UserNotLogin";
import {readAllUserOrders} from "@/src/api/orders";
import {useInsertOrderListener} from "@/src/api/orders/subscription";

type OrderItem = {
  id: number;
  product_id: number;
  order_id: number;
  quantity: number;
};

type Product = {
  id: number;
  image: string;
};

type Order = {
  id: number;
  created_at: string;
  status: string;
  total_price: number; 
  user_id: number;
  order_items: OrderItem[];
  product_images?: string[];
};

const HistoricScreen = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const { session } = useAuth();

  useInsertOrderListener();

  const { data: ordersData, error} = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await readAllUserOrders(session?.id as string);
      return res.data;
    }
  })

  useEffect(() => {
    const fetchOrders = async () => {
      // const { data: ordersData, error: ordersError } = await supabase
      //   .from('orders')
      //   .select('id, created_at, status, total_price, user_id, order_items(product_id)')
      //   .eq('user_id', session?.id)
      //   .order('created_at', { ascending: false });
      //
      // if (ordersError) {
      //   console.error(ordersError);
      //   setLoading(false);
      //   return;
      // }

      if (!ordersData) {
        return <ActivityIndicator />
      }

      const productIds = ordersData.flatMap(order =>
        order.order_items.map(item => item.product_id)
      );

      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('id, image')
        .in('id', productIds);

      if (productsError) {
        console.error(productsError);
        setLoading(false);
        return;
      }

      const productImages = new Map<number, string>();
      productsData.forEach(product => {
        productImages.set(product.id, product.image);
      });

      const enrichedOrders = ordersData.map(order => {
        const productImagesForOrder = order.order_items.map(item => productImages.get(item.product_id));
        return { ...order, product_images: productImagesForOrder };
      });

      setOrders(enrichedOrders);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.light.background} />;
  }

  if (!session) {
    return (
        <SafeAreaView style={styles.container}>
          <UserNotLogin />
        </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Historic
            order={item} 
            icon={<AntDesign name="star" size={20} color="#0F8ACE" style={styles.icon} />}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  icon: {
    marginLeft: 10,
  },
});

export default HistoricScreen;
