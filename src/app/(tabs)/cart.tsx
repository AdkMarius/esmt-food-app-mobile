import React, {useEffect, useState} from "react";
import {View, StyleSheet, FlatList, Pressable, Alert} from "react-native";
import {Stack, useRouter} from "expo-router";
import {Colors} from "@/src/constants/Colors";
import {useCart} from "@/src/providers/CardProvider";
import CartItemComponent from "@/src/components/CartItemComponent";
import { SafeAreaView} from "react-native-safe-area-context";
import CartFooter from "@/src/components/CartFooter";
import {useAuth} from "@/src/providers/AuthProvider";

const CartScreen = () => {
    const { items, checkout, total_price, passOrder} = useCart();

    const router = useRouter();

    const { session, balance, updateBalance} = useAuth();

    const makePayment = async (): Promise<null | void> => {
        if (!session) {
            Alert.alert('Error', 'Veuillez vous authentifier pour continuer');
            router.navigate('/sign-in');
            return null;
        }

        if (balance < total_price) {
            Alert.alert('Error', 'Solde insuffisant');
            return null;
        }

        const isOkay = await passOrder(balance - total_price);

        if (isOkay) {
            checkout();
        }
        else return Alert.alert('Error', 'Veuillez réessayer svp');
    }

    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            <View style={styles.products}>

                <FlatList
                    data={items}
                    renderItem={({ item }) => <CartItemComponent cartItem={item} />}
                    contentContainerStyle={{ gap: 20 }}
                    ListFooterComponent={
                        <CartFooter
                            price={total_price.toString()}
                            onPress={makePayment}
                        />
                }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 15
    },
    header: {
        justifyContent: "flex-start",
        flexDirection: 'row',
        columnGap: 60,
        marginBottom: 50
    },
    headerText: {
        alignSelf: "center"
    },
    image: {
        width: '100%',
        marginTop: 5,
        marginBottom: 5,
        objectFit: 'contain'
    },
    icon: {
        width: 48,
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    products: {
        rowGap: 20
    }
});


export default CartScreen;