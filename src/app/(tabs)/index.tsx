import {Image, StyleSheet, Platform, View, Text, ScrollView, Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import React from 'react';
import CategoryList from '@/src/components/CategoryList';
import MenuDuJour from '@/src/components/MenuDuJour';
import PopularProducts from "@/src/components/PopularProducts";
import TitleFont from "@/src/components/typography/TitleFont";
import {FontAwesome} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import useDayMenu from "@/src/hooks/useDayMenu";
import {Stack, useRouter} from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const { data: dayMenu} = useDayMenu();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>

        <Stack.Screen
            options={{
                headerShown: false
            }}
        />
         <View style={styles.header}>
            <Image source={require('@/assets/images/icon-screen.png')} style={styles.image} />
            <View style={styles.containerIcon}>
                <Pressable style={styles.icon}>
                    <FontAwesome name='bell' size={24} />
                </Pressable>
                <Pressable style={styles.icon} onPress={() => {router.push('/settings')}}>
                    <FontAwesome name='gear' size={24} />
                </Pressable>
            </View>
        </View>

        <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
                <TitleFont text="Categories" />
                <CategoryList />
            </View>

            <View style={styles.section}>
                <TitleFont text="Produits populaires" />
                <PopularProducts />
            </View>

            <View style={styles.section}>
                <TitleFont text="Menu du jour" />
                {dayMenu ? (
                    <MenuDuJour product={dayMenu} />
                ) : (
                    <Text>No menu available</Text>
                )}
            </View>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'black' : 'auto'} />
        </ScrollView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 15
    },
    home: {
        backgroundColor: Colors.light.background,
        flex:1
    },
    section: {
        rowGap: 20,
        marginBottom: 50
    },
    header: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        columnGap: 150
    },
    headerText: {
        textAlign: "center"
    },
    icon: {
        width: 48,
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    image: {
        width: 100,
        aspectRatio: 1
    },
    containerIcon: {
        flexDirection: 'row',
        columnGap: 10
    }
});
