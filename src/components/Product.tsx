import {Pressable, StyleSheet, Image, View} from "react-native";
import React from "react";
import {Tables} from "@/src/lib/types";
import {Link} from "expo-router";
import BodyFont from "@/src/components/typography/BodyFont";

type ProductProps = {
    item?: Tables<'products'>;
}

const product: Tables<'products'> = {
    id: 3,
    created_at: "",
    name: "Tchep poulet",
    price: 1500,
    image: "https://xtvafetdmggkohcoekoa.supabase.co/storage/v1/object/public/products/tchep-poisson.png?t=2024-08-02T04%3A29%3A05.288Z",
    isAvailable: true,
    isDayMenu: true,
    id_category: 1
}

const Product = ( { item }: ProductProps) => {
    if (item) {
        return (
            <Link href={`/menu/${item.id}`} asChild>
                <Pressable style={styles.container}>
                    <Image source={{ uri: item.image as string}} style={styles.image} />

                    <View>
                        <BodyFont text={item.name} />
                    </View>

                </Pressable>
            </Link>
        );
    }

    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: product.image as string}} style={styles.image} />

                <View>
                    <BodyFont text={product.name} />
                </View>

            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 200,
        borderColor: '#f4f4f4',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        rowGap: 10,
        marginBottom: 20
    },
    image: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 100
    }
})

export default Product;