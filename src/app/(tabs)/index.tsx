import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import CTAGreenButton from "@/src/components/button/CTAGreenButton";
import WHITEButton from '@/src/components/button/WHITEButton';
import React from 'react';


export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: Colors.light.background }} >
        <Text>Home Screen</Text>
        <CTABlueButton text="Creer un button ici" />
        <CTAGreenButton text="Creer un autre ici" />
        <WHITEButton title="Créer un compte avec Google" icon='google' />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({

});
