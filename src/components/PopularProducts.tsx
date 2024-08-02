import {View, StyleSheet, FlatList, ScrollView} from "react-native";
import Product from "@/src/components/Product";
import React, {useEffect, useState} from "react";
import {Tables} from "@/src/lib/types";
import {readAllProducts} from "@/src/api/products";

const PopularProducts = () => {

    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <Product />
                <Product />
                <Product />
                <Product />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 20
    }
})

export default PopularProducts;