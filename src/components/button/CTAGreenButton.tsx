import {Pressable, StyleSheet, Text, View} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { forwardRef } from 'react';
import React from 'react';

type ButtonProps = {
    text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const CTAGreenButton = forwardRef<View | null, ButtonProps>(
    ({ text, ...pressableProps }, ref) => {
        return (
            <Pressable ref={ref} {...pressableProps} style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tintGreen,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});

export default CTAGreenButton;