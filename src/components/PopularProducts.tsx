import {View, StyleSheet, FlatList, ScrollView, ActivityIndicator, Pressable, Image} from "react-native";
import Product from "@/src/components/Product";
import React from "react";
import {readPopularProducts} from "@/src/api/products";
import {useQuery} from "@tanstack/react-query";
import {Tables} from "@/src/lib/types";
import BodyFont from "@/src/components/typography/BodyFont";
import {Colors} from "@/src/constants/Colors";
import {Link} from "expo-router";
import StarsRating from "@/src/components/StarsRating";

type PopularProductsProps = {
    products: Tables<'products'>;
    stars: number;
};

const Item = ({ stars, products }: PopularProductsProps) => {
  return (
      <Link href={`/menu/${products.id}`} asChild>
          <Pressable style={styles.productContainer}>
              <Image source={{ uri: products.image as string}} style={styles.image} />

              <View style={styles.namePrice}>
                  <BodyFont text={products.name} />
                  <BodyFont text={`${products.price.toString()} fcfa`} textStyle={{ color: Colors.light.tintBlue}} />
                  <StarsRating stars={stars} />
              </View>

          </Pressable>
      </Link>
  );
};

const PopularProducts = () => {

    const { data: popularProducts, isLoading, error } = useQuery({
        queryKey: ['popularProducts'],
        queryFn: async () => {
            const res = await readPopularProducts();
            return res.data;
        }
    });

    if (isLoading) {
        return <ActivityIndicator />
    }

    return (
        <FlatList
            data={popularProducts}
            renderItem={({ item }) => <Item products={item.products} stars={item.stars} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={{ gap: 20 }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 20
    },
    productContainer: {
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

export default PopularProducts;