import React, {ReactNode} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View, Text, Pressable, FlatList} from "react-native";
import {Colors} from "@/src/constants/Colors";
import HeaderFont from "@/src/components/typography/HeaderFont";
import {useAuth} from "@/src/providers/AuthProvider";
import UserNotLogin from "@/src/components/UserNotLogin";
import {FontAwesome} from "@expo/vector-icons";
import {Stack, useRouter} from "expo-router";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";
import BodyFont from "@/src/components/typography/BodyFont";
import TitleFont from "@/src/components/typography/TitleFont";
import Ionicons from "@expo/vector-icons/Ionicons";

type ItemProps = {
    icon: ReactNode,
    title: string
};

const Item = ({ icon, title}: ItemProps) => {
    return (
      <View style={styles.itemContainer}>
          { icon }
          <BodyFontHighlight text={title} />
      </View>
    );
}

const SettingsScreen = () => {
    const router = useRouter();
    const { session, profile , signOut } = useAuth();

    if (!session) {
        return (
            <SafeAreaView edges={['top']} style={styles.container}>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                />
                <Pressable style={styles.icon} onPress={() => {router.back()}}>
                    <FontAwesome name='arrow-left' size={24} />
                </Pressable>

                <UserNotLogin />
            </SafeAreaView>
        );
    }

    const settingsData: ItemProps[] = [
        {
            icon: <FontAwesome name="list" size={24} />,
            title: 'Historique des commandes'
        },
        {
            icon: <FontAwesome name="heart" size={24} />,
            title: 'Commandes favorites'
        },
        {
            icon: <FontAwesome name="user" size={24} />,
            title: 'Modifier son profil'
        },
        {
            icon: <FontAwesome name="trash" size={24} />,
            title: 'Supprimer votre compte'
        },
        {
            icon: <Ionicons name="log-out" size={24} onPress={() => {
                signOut();
                router.navigate('/');
            }} />,
            title: 'Se déconnecter'
        }
    ]

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />

            <Pressable style={styles.icon} onPress={() => {router.back()}}>
                <FontAwesome name='arrow-left' size={24} />
            </Pressable>

            <HeaderFont text="Settings" textStyle={{ marginBottom: 50}} />

            <View>
                <View>
                    { profile.full_name ? (
                        <TitleFont text={profile.full_name as string} textStyle={{ marginBottom: 20}} />
                    ) : (
                        <BodyFontHighlight text="# renseignez vos informations" />
                    )}
                    <BodyFont text={session.email as string} textStyle={{ marginBottom: 20}}/>
                </View>

                <FlatList
                    data={settingsData}
                    renderItem={({item}) => (
                        <Item title={item.title} icon={item.icon} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 15
    },
    icon: {
        width: 48,
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginBottom: 20
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
        columnGap: 40,
        borderColor: '#f4f4f4',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 60
    }
});

export default SettingsScreen;