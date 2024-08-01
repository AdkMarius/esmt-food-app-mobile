import { Image, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import React from 'react';
import { products } from '../../assets/data/data';
import CTAGreenButton from "@/src/components/button/CTAGreenButton";

const MenuDuJour = ({ product }) => {
  return (
    <View style={styles.container}>
        <View style={styles.item}>
          <Image source={{ uri: product.image }} style={styles.imageproduct} />
          <Text style={styles.text}>{product.name}</Text>
          <Text style={styles.text}>{product.price} fcfa</Text>
          <CTAGreenButton text='Ajouter au panier'/>
        </View>
      
    </View>
  );
};

export default MenuDuJour;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flexDirection: 'row', // Place les éléments en ligne
    justifyContent: 'space-around', // Espace les éléments de manière égale
    padding: 20,
    borderRadius: 25,

  },
  item: {
    alignItems: 'center', // Centre l'image et le texte horizontalement
  },
  imageproduct: {
    width: '80%',
    aspectRatio:1,
    borderRadius: 110,
    marginBottom: 10, 
  },
  text: {
    fontSize: 13,
  },
});
