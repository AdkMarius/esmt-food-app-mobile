import React from "react";
import {View, Text, StyleSheet, FlatList, Pressable, ScrollView} from "react-native";
import {Stack, useRouter} from "expo-router";
import {Colors} from "@/src/constants/Colors";
import {useCart} from "@/src/providers/CardProvider";
import CartItemComponent from "@/src/components/CartItemComponent";
import { SafeAreaView} from "react-native-safe-area-context";
import {FontAwesome} from "@expo/vector-icons";
import HeaderFont from "@/src/components/typography/HeaderFont";
import TitleFont from "@/src/components/typography/TitleFont";
import CartFooter from "@/src/components/CartFooter";

const CartScreen = () => {
    const { items, checkout, total_price } = useCart();

    const router = useRouter();

    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />

            <View style={styles.header}>
                <Pressable style={styles.icon} onPress={() => {router.back()}}>
                    <FontAwesome name='arrow-left' size={24} />
                </Pressable>
                <HeaderFont textStyle={styles.headerText} text="Mon Panier" />
            </View>

            <View style={styles.products}>
                <TitleFont text="Produits" />

                <FlatList
                    data={items}
                    renderItem={({ item }) => <CartItemComponent cartItem={item} />}
                    contentContainerStyle={{ gap: 20 }}
                    ListFooterComponent={
                        <CartFooter
                            price={total_price.toString()}
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