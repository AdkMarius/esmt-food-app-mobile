import {Text, StyleSheet, TextStyle} from "react-native";
import React from 'react';

type Props = {
    textStyle?: TextStyle
    text: string
};

const BodyFontHighlight: React.FC<Props> = ({ text, textStyle }) => {
    return <Text style={[styles.highlight, textStyle]}>{ text }</Text>
}

const styles = StyleSheet.create({
    highlight: {
        fontSize: 18,
        fontWeight: "500"
    }
});

export default BodyFontHighlight;