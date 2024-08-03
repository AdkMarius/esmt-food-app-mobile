import {FlatList, StyleSheet, View, Text, Alert} from "react-native";
import React from "react";
import PriceComponent from "@/src/components/PriceComponent";
import {useState, useMemo} from "react";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import {useAuth} from "@/src/providers/AuthProvider";
import {useCart} from "@/src/providers/CardProvider";

type Props = {
    price: string;
    onPress: () => Promise<void | null>;
}
const CartFooter = (props: Props) => {
    const {
        price,
        onPress
    } = props;

    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
        <View style={{ marginTop: 20}}>
            <PriceComponent price={price} />

            <CTABlueButton
                text="Passer au paiement"
                onPress={onPress}
            />
        </View>
    );
};

export default CartFooter;