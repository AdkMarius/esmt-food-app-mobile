import { Image, StyleSheet, View, Text } from 'react-native';
import { Colors } from "@/src/constants/Colors";
import React from 'react';
import CTAGreenButton from "@/src/components/button/CTAGreenButton";
import {Tables} from "@/src/lib/types";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";
import CTABlueButton from "@/src/components/button/CTABlueButton";

type Props = {
  product: Tables<'products'>
};

const MenuDuJour = ({ product }: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.item}>
          <Image source={{ uri: product.image as string}} style={styles.imageProduct} />

          <BodyFontHighlight text={product.name} textStyle={{ marginBottom: 10}}/>
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
            <BodyFontHighlight text={product.price.toString()} />
            <BodyFontHighlight text="fcfa" />
          </View>

          <CTAGreenButton text='Ajouter au panier' />

          <CTABlueButton text='Commander le menu du jour'/>
        </View>
      
    </View>
  );
};

export default MenuDuJour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 25,
  },
  item: {
    alignItems: 'center',
    rowGap: 10
  },
  imageProduct: {
    width: '50%',
    aspectRatio:1,
    borderRadius: 100,
    marginBottom: 10, 
  },
  text: {
    fontSize: 13,
  },
});
