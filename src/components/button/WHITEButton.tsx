// components/CustomButton.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, Image} from 'react-native';
import { Colors } from "@/src/constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";

interface WHITEButtonProps {
  title: string;
  icon: 'google' | 'apple';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const WHITEButton: React.FC<WHITEButtonProps> = ({ title, icon, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <FontAwesome name={icon} size={24} />
      <BodyFontHighlight text={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.background,
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    borderColor: Colors.light.icon,
    borderWidth: 2,
    marginVertical: 10,
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: "center"
  },
  icon: {
    width: 100,
    aspectRatio: 1
  }
});

export default WHITEButton;
