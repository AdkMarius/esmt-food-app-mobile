import {Text, StyleSheet, TextStyle} from "react-native";
import React from 'react';


type Props = {
    textStyle?: TextStyle
    text: string
};

const HeaderFont: React.FC<Props> = ({ text, textStyle }) => {
    return <Text style={[styles.header, textStyle]}>{ text }</Text>
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: "600"
    }
});

export default HeaderFont;