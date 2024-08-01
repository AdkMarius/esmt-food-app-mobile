import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HorizontalLine = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>Ou</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        columnGap: 40,
        marginBottom: 20
    },
    line: {
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 2,
        marginVertical: 10,
        width: 100
    },
    text: {
        fontSize: 24,
        color: '#f4f4f4'
    }
});

export default HorizontalLine;