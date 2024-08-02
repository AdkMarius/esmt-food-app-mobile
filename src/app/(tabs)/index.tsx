import { Image, StyleSheet, Platform, View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import CTAGreenButton from "@/src/components/button/CTAGreenButton";
import WHITEButton from '@/src/components/button/WHITEButton';
import React from 'react';
import {categories, products, orders} from '@/assets/data/data';
import CategorieList from '@/src/components/CategorieList';
import MenuDuJour from '@/src/components/MenuDuJour';
import CommandePrecedente from '@/src/components/CommandePrecedente';
import Historique from '@/src/components/Historique';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: Colors.light.background }} >
        <ScrollView style={styles.home}>
            <Text style={ styles.title}>Categories</Text>
            <CategorieList categorie={categories[0]}/>
            <Text style={ styles.title}>Produits populaires</Text>

            {/* afficher les produits populaires */}
            <Text style={styles.title}>Menu du jour</Text>
            <MenuDuJour product={products[1]} />
            <CTABlueButton text='Commander le menu du jour'/>
        </ScrollView>
    </SafeAreaView>
  );
}
 
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
