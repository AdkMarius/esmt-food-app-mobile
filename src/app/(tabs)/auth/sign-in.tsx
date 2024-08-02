import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import HeaderFont from "@/src/components/typography/HeaderFont";
import {Link, Stack, useRouter} from "expo-router";
import { Colors } from "@/src/constants/Colors";
import {SafeAreaView} from "react-native-safe-area-context";
import WHITEButton from "@/src/components/button/WHITEButton";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import HorizontalLine from "@/src/components/HorizontalLine";
import BodyFontSmall from "@/src/components/typography/BodyFontSmall";
const SignInScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <View style={styles.header}>
                <HeaderFont text="Se connecter" />
            </View>

            <Image source={require('@/assets/images/login-screen.png')} style={styles.image}/>

            <View style={styles.loginButtons}>
                <WHITEButton title="Se connecter avec Google" icon="google" />
                <WHITEButton title="Se connecter avec Apple" icon="apple" />
            </View>

            <HorizontalLine />

            <CTABlueButton text="Se connecter avec email" onPress={() => {router.push('/auth/login-with-email')}} />

            <View style={styles.bottomText}>
                <BodyFontSmall text="Pas encore de compte ?" />
                <Link href="/auth/sign-up">
                    <BodyFontSmall text="Créer un compte" textStyle={styles.createAccount} />
                </Link>
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
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 32,
        aspectRatio: 1,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        borderRadius: 100,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        objectFit: 'contain'
    },
    loginButtons: {
        rowGap: 10,
        marginBottom: 20
    },
    bottomText: {
        flexDirection: 'row',
        columnGap: 5,
        marginVertical: 'auto',
        justifyContent: "center"
    },
    createAccount: {
        color: Colors.light.tintBlue
    }
})

export default SignInScreen;