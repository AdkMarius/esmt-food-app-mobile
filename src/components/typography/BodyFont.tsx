import { Text, StyleSheet } from "react-native";
import React from 'react';


type Props = {
    text: string
};

function BodyFont({ text }: Props) {

    return <Text style={styles.bodyFont}>{ text }</Text>
}

const styles = StyleSheet.create({
    bodyFont: {
        fontSize: 16,
        fontWeight: "normal"
    }
});

export default BodyFont;