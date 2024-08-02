import {readAllProducts} from "@/src/api/products";
import {Tables} from "@/src/lib/types";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import Product from "@/src/components/Product";
import TitleFont from "@/src/components/typography/TitleFont";

const fetchProducts = async () => {
    const res = await readAllProducts();
    return res.data as Tables<'products'>[];
};

const ProductList = () => {

    const { data: products, isLoading: isLoadingProducts } = useQuery<Tables<'products'>[]>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if (isLoadingProducts) return <ActivityIndicator />

    return (
        <View style={styles.section}>
            <TitleFont text="Products" />

            <FlatList
                data={products}
                renderItem={({ item }) => <Product item={item} />}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                columnWrapperStyle={{
                    justifyContent: 'space-between', // Assure-toi que l'espacement horizontal est correct
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
        gap: 20
    },
})
export default ProductList;