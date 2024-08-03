import {Image, StyleSheet, View, Text, Alert} from 'react-native';
import { Colors } from "@/src/constants/Colors";
import React from 'react';
import CTAGreenButton from "@/src/components/button/CTAGreenButton";
import {Tables} from "@/src/lib/types";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import {useCart} from "@/src/providers/CardProvider";
import {useAuth} from "@/src/providers/AuthProvider";
import {useRouter} from "expo-router";

type Props = {
  product: Tables<'products'>
};

const MenuDuJour = ({ product }: Props) => {
  const { total_price, passOrder, checkout, addItem } = useCart();
  const { balance, session,  } = useAuth();

  const router = useRouter();

  const makePayment = async (): Promise<null | void> => {
    if (!session) {
      Alert.alert('Error', 'Veuillez vous authentifier pour continuer');
      router.navigate('/sign-in');
      return null;
    }

    if (balance < total_price) {
      Alert.alert('Error', 'Solde insuffisant');
      return null;
    }

    const isOkay = await passOrder(balance - total_price);

    if (isOkay) {
      checkout();
    }
    else return Alert.alert('Error', 'Veuillez réessayer svp');
  };

  return (
    <View style={styles.container}>
        <View style={styles.item}>
          <Image source={{ uri: product.image as string}} style={styles.imageProduct} />

          <BodyFontHighlight text={product.name} textStyle={{ marginBottom: 10}}/>
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
            <BodyFontHighlight text={product.price.toString()} />
            <BodyFontHighlight text="fcfa" />
          </View>

          <CTAGreenButton text='Ajouter au panier' onPress={() => {
              addItem(product);
              Alert.alert('Succès', 'Le produit a été ajouté à votre pannier.');
          }}/>

          <CTABlueButton text='Commander le menu du jour' onPress={() => {makePayment()}}/>
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
