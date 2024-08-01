import { Image, StyleSheet, Platform, View, Text,} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import CTAGreenButton from "@/src/components/button/CTAGreenButton";
import WHITEButton from '@/src/components/button/WHITEButton';
import React from 'react';
import {categories} from '../../../assets/data/data';
import CategorieList from '@/src/components/CategorieList';



export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text style={ styles.title}>Categories</Text>
      <CategorieList categorie={categories[0]}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  home: {
    backgroundColor: Colors.light.background,
    flex: 1
  },
  title: { 
    fontSize:20,
    padding:10,
    fontWeight:'bold'
  },

});
