import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Colors } from "@/src/constants/Colors";
import CTAGreenButton from "@/src/components/button/CTAGreenButton";

const CommandePrecedente = ({ order }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: order.image }} style={styles.imageorder} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Commande {order.id}</Text>
        <View style={styles.priceAndButtonContainer}>
          <Text style={styles.price}>{order.total_price} fcfa</Text>
          <CTAGreenButton text='Recommander' />
        </View>
      </View>
    </View>
  );
};

export default CommandePrecedente;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 25,
  },
  imageorder: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },

  priceAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 13,
    marginRight: 10,
    color: 'green',

  },
});
