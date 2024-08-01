import {Text, StyleSheet, TextStyle} from "react-native";
import React from 'react';


type Props = {
    textStyle?: TextStyle
    text: string
};

const BodyFont: React.FC<Props> = ({ text, textStyle }) => {
    return <Text style={[styles.bodyFont, textStyle]}>{ text }</Text>
}

const styles = StyleSheet.create({
    bodyFont: {
        fontSize: 16,
        fontWeight: "normal"
    }
});

export default BodyFont;