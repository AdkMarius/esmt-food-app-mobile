import {Pressable, StyleSheet, Image, View} from "react-native";
import React from "react";
import {Tables} from "@/src/lib/types";
import {Link} from "expo-router";
import BodyFont from "@/src/components/typography/BodyFont";
import { Colors } from "@/src/constants/Colors";
import StarsRating from "@/src/components/StarsRating";

type PopularProductsProps = {
    id: number,
    created_at: string,
    name: string,
    price: number,
    image: string,
    isAvailable: boolean,
    isDayMenu: boolean,
    id_category: number,
    stars: number
};

type Props = {
    item: PopularProductsProps;
}

const Product = ({ item }: Props) => {
    return (
        <Link href={`/menu/${item?.id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: item?.image as string}} style={styles.image} />

                <View style={styles.namePrice}>
                    <BodyFont text={item?.name as string} />
                    <BodyFont text={`${item?.price.toString()} fcfa`} textStyle={{ color: Colors.light.tintBlue}} />
                    { item.stars ? (
                        <StarsRating stars={item.stars} />
                    ) : (
                        <BodyFont text="Pas de notes" textStyle={{ color: "#b9cb00"}} />
                    )}
                </View>

            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 250,
        borderColor: '#f4f4f4',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        rowGap: 10,
        marginBottom: 20,
        backgroundColor: '#f4f4f4'
    },
    image: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 100
    },
    namePrice: {
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10
    }
})

export default Product;