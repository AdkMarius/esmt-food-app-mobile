import { Text, StyleSheet } from "react-native";

type Props = {
    text: string
};

function BodyFontSmall({ text }: Props) {

    return <Text style={styles.smallBody}>{ text }</Text>
}

const styles = StyleSheet.create({
    smallBody: {
        fontSize: 14,
        fontWeight: "normal"
    }
});

export default BodyFontSmall;