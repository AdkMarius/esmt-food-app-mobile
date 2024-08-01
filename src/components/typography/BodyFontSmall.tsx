import {Text, StyleSheet, TextStyle} from "react-native";
import React from 'react';


type Props = {
    textStyle?: TextStyle
    text: string
};

const BodyFontSmall: React.FC<Props> = ({ text, textStyle }) => {
    return <Text style={[styles.smallBody, textStyle]}>{ text }</Text>
}

const styles = StyleSheet.create({
    smallBody: {
        fontSize: 14,
        fontWeight: "normal"
    }
});

export default BodyFontSmall;