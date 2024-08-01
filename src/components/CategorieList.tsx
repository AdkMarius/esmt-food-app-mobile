import { Image, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import React from 'react';
import { categories } from '../../assets/data/data';

const CategorieList = ({ categorie }) => {
  return (
    <View style={styles.container}>
      {categories.map((categorie, index) => (
        <View key={index} style={styles.item}>
          <Image source={{ uri: categorie.image }} style={styles.imagecategorie} />
          <Text style={styles.text}>{categorie.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategorieList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    flexDirection: 'row', // Place les éléments en ligne
    justifyContent: 'space-around', // Espace les éléments de manière égale
    padding: 20,
  },
  item: {
    alignItems: 'center', // Centre l'image et le texte horizontalement
  },
  imagecategorie: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10, 
  },
  text: {
    fontSize: 13,
  },
});
