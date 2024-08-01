import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Pressable, StyleSheet, TextInput, View} from "react-native";
import {Stack, useRouter} from "expo-router";
import HeaderFont from "@/src/components/typography/HeaderFont";
import {FontAwesome} from "@expo/vector-icons";
import CTABlueButton from "@/src/components/button/CTABlueButton";

const LoginWithEmail = () => {
    const router = useRouter();

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <View style={styles.header}>
                <Pressable style={styles.icon} onPress={() => {router.back()}}>
                    <FontAwesome name='arrow-left' size={24} />
                </Pressable>
                <HeaderFont textStyle={styles.headerText} text="Connectez-vous" />
            </View>

            <Image source={require('@/assets/images/login-with-email.png')} style={styles.image} />

            <View style={styles.infosUser}>
                <View style={styles.input}>
                    <FontAwesome name="envelope" size={24}/>
                    <TextInput placeholder="Email" style={styles.textInput}/>
                </View>

                <View style={styles.input}>
                    <FontAwesome name="lock" size={24} />
                    <TextInput placeholder="Mot de Passe" style={styles.textInput} secureTextEntry={true} />
                </View>
            </View>

            <View style={{ marginVertical: 'auto' }}>
                <CTABlueButton text="Se connecter" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
    },
    header: {
        justifyContent: "flex-start"
    },
    headerText: {
        textAlign: "center"
    },
    image: {
        width: '100%',
        marginTop: 5,
        marginBottom: 5,
        objectFit: 'contain'
    },
    input: {
        flexDirection: "row",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#f4f4f4',
        height: 56,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 25,
        columnGap: 20
    },
    textInput: {
        fontSize: 18,
        width: '80%'
    },
    infosUser: {
        rowGap: 20
    },
    icon: {
        width: 48,
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    }
})

export default LoginWithEmail;