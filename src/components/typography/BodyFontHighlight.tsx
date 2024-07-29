import { Text, StyleSheet } from "react-native";

type Props = {
    text: string
};

function BodyFontHighlight({ text }: Props) {

    return <Text style={styles.highlight}>{ text }</Text>
}

const styles = StyleSheet.create({
    highlight: {
        fontSize: 18,
        fontWeight: "500"
    }
});

export default BodyFontHighlight;