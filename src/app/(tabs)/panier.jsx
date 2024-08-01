import { Image, StyleSheet, Platform, View, Text, ScrollView} from 'react-native';
import React from "react";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import CTAGreenButton from "@/src/components/button/CTAGreenButton";
import WHITEButton from '@/src/components/button/WHITEButton';
import {categories, products, orders} from '../../../assets/data/data';
import CategorieList from '@/src/components/CategorieList';
import MenuDuJour from '@/src/components/MenuDuJour';
import CommandePrecedente from '@/src/components/CommandePrecedente';
import Historique from '@/src/components/Historique';

const Panier = () => {
    return(
        <ScrollView style={styles.home}>
            <Text style={ styles.title}>Produits</Text>
        </ScrollView>
    )
}

export default Panier

const styles = StyleSheet.create({
    home: {
      backgroundColor: Colors.light.background,
      flex:1
    },
    title: { 
      fontSize:20,
      padding:10,
      fontWeight:'bold'
    },
  
  });