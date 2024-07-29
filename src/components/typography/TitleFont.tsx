import { Text, StyleSheet } from "react-native";

type Props = {
    text: string
};

function TitleFont({ text }: Props) {

    return <Text style={styles.title}>{ text }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default TitleFont;