import React from "react";
import { View, StyleSheet, Image} from "react-native";
import HeaderFont from "@/src/components/typography/HeaderFont";
import {Link, Stack, useRouter} from "expo-router";
import { Colors } from "@/src/constants/Colors";
import {SafeAreaView} from "react-native-safe-area-context";
import WHITEButton from "@/src/components/button/WHITEButton";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import HorizontalLine from "@/src/components/HorizontalLine";
import BodyFontSmall from "@/src/components/typography/BodyFontSmall";
const SignUpScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <View style={styles.header}>
                <HeaderFont text="Créer un compte" />
            </View>

            <Image source={require('@/assets/images/sign-up-screen.png')} style={styles.image}/>

            <View style={styles.loginButtons}>
                <WHITEButton title="Créer un compte avec Google" icon="google" />
                <WHITEButton title="Créer un compte avec Apple" icon="apple" />
            </View>

            <HorizontalLine />

            <CTABlueButton
                text="Créer un compte avec email"
                onPress={() => {router.push('/auth/create-account')}}
            />

            <View style={styles.bottomText}>
                <BodyFontSmall text="Avez-vous déjà un compte ?" />
                <Link href="/auth/sign-in">
                    <BodyFontSmall text="Connectez-vous" textStyle={styles.createAccount} />
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
        alignItems: 'center',
        justifyContent: "flex-start",
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

export default SignUpScreen;