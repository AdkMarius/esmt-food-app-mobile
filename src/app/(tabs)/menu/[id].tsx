import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {router, Stack, useLocalSearchParams, useNavigation, useRouter} from "expo-router";
import {ActivityIndicator, Alert, Image, Pressable, StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Colors} from "@/src/constants/Colors";
import {useQuery} from "@tanstack/react-query";
import {Tables} from "@/src/lib/types";
import {readProductById} from "@/src/api/products";
import HeaderFont from "@/src/components/typography/HeaderFont";
import BodyFont from "@/src/components/typography/BodyFont";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import {useCart} from "@/src/providers/CardProvider";
import PriceComponent from "@/src/components/PriceComponent";

const ProductDetailsScreen = () => {
    const { id: idString } = useLocalSearchParams();
    const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);

    const navigation = useNavigation();

    const { addItem } = useCart();

    const { data: product, isLoading } = useQuery<Tables<'products'>>({
        queryKey: ['products', id],
        queryFn: async () => {
            const res = await readProductById(id);
            return res.data;
        }
    });

    if (isLoading) {
        return (
            <SafeAreaView edges={['top']} style={[styles.container, { justifyContent: 'center', alignItems: 'center'}]}>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                />

                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />

            <View style={[styles.header, styles.section]}>
                <Pressable style={styles.icon} onPress={() => {navigation.goBack()}}>
                    <FontAwesome name='arrow-left' size={24} />
                </Pressable>
                <HeaderFont textStyle={styles.headerText} text={product?.name as string} />
            </View>

            <Image source={{ uri: product?.image }} style={[styles.image, styles.section]} />

            <PriceComponent price={product?.price.toString()} />

            <CTABlueButton
                text="Ajouter au panier"
                style={{ marginVertical: 'auto' }}
                onPress={() => {
                    addItem(product as Tables<'products'>);
                    Alert.alert('Succès', 'Le produit a été ajouté à votre pannier.');
                }}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 15
    },
    sectionList: {
        gap: 20,
        padding: 20
    },
    section: {
        marginBottom: 50,
    },
    header: {
        justifyContent: "flex-start",
        padding: 15,
    },
    headerText: {
        textAlign: "center"
    },
    icon: {
        width: 48,
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#f4f4f4',
        alignSelf: "center",
        justifyContent: "center",
        objectFit: 'cover'
    },
});

export default ProductDetailsScreen;