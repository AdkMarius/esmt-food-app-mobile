import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Option {
    label: string;
    value: string;
}

interface RadioButtonGroupProps {
    options: Option[];
    onSelect: (value: string) => void;
    selectedOption: string | null;
}

const RadioButtonGroup:
    React.FC<RadioButtonGroupProps> = ({
       options,
       onSelect,
       selectedOption,
   }) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.optionContainer}
                    onPress={() => onSelect(option.value)}
                >
                    <View style={styles.radioCircle}>
                        {selectedOption === option.value && <View style={styles.selectedRb} />}
                    </View>
                    <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRb: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#2c3e50',
    },
    optionText: {
        fontSize: 16,
    },
});

export default RadioButtonGroup;
