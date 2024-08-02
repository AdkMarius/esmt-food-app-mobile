import React from "react";
import {View, Image, StyleSheet} from "react-native";
import TitleFont from "@/src/components/typography/TitleFont";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import {useRouter} from "expo-router";

const UserNotLogin = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/user-not-loggin.png')} style={styles.image}/>
            <View style={styles.action}>
                <TitleFont text="Oops! Veuillez vous connectez"/>

                <CTABlueButton text="Se connecter" onPress={() => router.navigate('/auth/sign-in')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        rowGap: 40
    },
    image: {
        width: 100,
        borderRadius: 100,
        aspectRatio: 1,
        objectFit: 'contain'
    },
    action: {
        rowGap: 40
    }
})
export default UserNotLogin;