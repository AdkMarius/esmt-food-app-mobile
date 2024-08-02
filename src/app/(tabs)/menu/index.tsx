import React from "react";
import {SectionList, Image, Pressable, StyleSheet, View} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TitleFont from "@/src/components/typography/TitleFont";
import CategoryList from "@/src/components/CategoryList";
import MenuDuJour from "@/src/components/MenuDuJour";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/src/constants/Colors";
import useDayMenu from "@/src/hooks/useDayMenu";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";
import {Stack, useRouter} from "expo-router";
import ProductList from "@/src/components/ProductList";

const MenuScreen = () => {
    const router = useRouter();

    const { data: dayMenu } = useDayMenu();

    const sections = [
        { title: 'Categories', data: [{ key: 'categories' }] },
        { title: 'Menu du jour', data: [{ key: 'dayMenu' }] },
    ];

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

            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item.key + index}
                renderSectionHeader={({ section }) => (
                    <View style={styles.section}>
                        <TitleFont text={section.title} />
                    </View>
                )}
                renderItem={({ item, section }) => {
                    switch (section.title) {
                        case 'Categories':
                            return <CategoryList />;
                        case 'Menu du jour':
                            return dayMenu ? (
                                <MenuDuJour product={dayMenu} />
                            ) : (
                                <BodyFontHighlight text="Pas de menu du jour aujourd'hui" />
                            );
                        default:
                            return null;
                    }
                }}
                ListFooterComponent={<ProductList />}
                contentContainerStyle={styles.sectionList}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 15
    },
    sectionList: {
        gap: 20,
    },
    section: {
        marginBottom: 20,
    },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
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

export default MenuScreen;
