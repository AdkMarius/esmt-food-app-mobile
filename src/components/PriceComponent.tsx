import BodyFont from "@/src/components/typography/BodyFont";
import {StyleSheet, View} from "react-native";
import HeaderFont from "@/src/components/typography/HeaderFont";
import React from "react";

const PriceComponent = ({ price }: {price: string}) => {
    return (
        <View style={[styles.priceContainer, styles.section]}>
            <BodyFont text="Prix" />
            <View style={styles.price}>
                <HeaderFont text={price} />
                <HeaderFont text="Fcfa" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 50,
    },
    priceContainer: {
        backgroundColor: '#f4f4f4',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 20,
        height: 100
    },
    price: {
        flexDirection: 'row',
        columnGap: 10
    }
});

export default PriceComponent;