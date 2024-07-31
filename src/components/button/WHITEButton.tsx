// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface WHITEButtonProps {
  title: string;
  
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const WHITEButton: React.FC<WHITEButtonProps> = ({ title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    borderColor: '#808080', 
    borderWidth: 2,
    marginVertical: 10,
 
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WHITEButton;
