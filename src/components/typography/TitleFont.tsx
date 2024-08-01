import {Text, StyleSheet, TextStyle} from "react-native";
import React from 'react';

type Props = {
    textStyle?: TextStyle
    text: string
};

const TitleFont: React.FC<Props> = ({ text, textStyle }) => {
    return <Text style={[styles.title, textStyle]}>{ text }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default TitleFont;