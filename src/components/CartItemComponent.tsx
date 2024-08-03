import React from "react";
import {View, Text, Image, Pressable, StyleSheet} from "react-native";
import {CartItem} from "@/src/lib/types";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";
import {FontAwesome} from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";
import BodyFont from "@/src/components/typography/BodyFont";
import {useCart} from "@/src/providers/CardProvider";

type Props = {
    cartItem: CartItem;
}
const CartItemComponent = ({ cartItem }: Props) => {
    const { updateQuantity } = useCart();

    return (
        <View style={styles.container}>
            <Image source={{ uri: cartItem.product.image as string}} style={styles.image}/>

            <View style={styles.leftContainer}>
                <BodyFontHighlight text={cartItem.product.name} />
                <View style={styles.bottomContainer}>
                    <View style={styles.price}>
                        <BodyFont text={cartItem.product.price.toString()} textStyle={{ color: '#fff'}} />
                    </View>
                    <View style={styles.bottomLeftContainer}>
                        <View style={styles.icon}>
                            <Pressable onPress={() => {updateQuantity(cartItem.id, -1)}}>
                                <FontAwesome name="minus" size={24} color={Colors.light.tintBlue} />
                            </Pressable>
                        </View>
                        <View style={styles.icon}>
                            <BodyFont text={cartItem.quantity.toString()} textStyle={{ color: Colors.light.tintBlue}}/>
                        </View>
                        <View style={styles.icon}>
                            <Pressable onPress={() => {updateQuantity(cartItem.id, 1)}}>
                                <FontAwesome name="plus" size={24} color={Colors.light.tintBlue} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderColor: '#f4f4f4',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        columnGap: 20
    },
    image: {
        width: '25%',
        aspectRatio: 1,
        objectFit: 'cover',
        borderRadius: 100,
    },
    leftContainer: {
        rowGap: 30
    },
    bottomContainer: {
        flexDirection: 'row',
        marginVertical: 'auto',
        columnGap: 40
    },
    bottomLeftContainer: {
        flexDirection: 'row',
        columnGap: 10
    },
    icon: {
        borderWidth: 1,
        borderColor: Colors.light.tintBlue,
        borderRadius: 2,
        width: 32,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        backgroundColor: Colors.light.tintBlue,
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CartItemComponent;