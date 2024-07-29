import { Text, StyleSheet } from "react-native";

type Props = {
    text: string
};

function HeaderFont({ text }: Props) {

    return <Text style={styles.header}>{ text }</Text>
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: "600"
    }
});

export default HeaderFont;