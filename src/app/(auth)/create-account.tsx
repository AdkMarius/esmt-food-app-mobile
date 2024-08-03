import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Pressable, StyleSheet, TextInput, View} from "react-native";
import {Stack, useRouter} from "expo-router";
import HeaderFont from "@/src/components/typography/HeaderFont";
import {FontAwesome} from "@expo/vector-icons";
import CTABlueButton from "@/src/components/button/CTABlueButton";
import BodyFont from "@/src/components/typography/BodyFont";
import {useAuth} from "@/src/providers/AuthProvider";

const CreateAccountScreen = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const { signUp } = useAuth();

    const createAccount = async () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!email || !password || !confirmedPassword) {
            setError("Veuillez remplir tous les champs");
            return null;
        } else {
            setError("");
        }

        if (password !== confirmedPassword) {
            setError("Les deux mots de passe ne correspondent pas");
            return null;
        } else {
            setError("");
        }

        if (!emailRegex.test(email)) {
            setError('L\'email est invalide');
            return null;
        } setError("");

        const isOkay = await signUp(email, password);

        if (isOkay) return router.navigate('/');
    }

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
                <HeaderFont textStyle={styles.headerText} text="Créer un nouveau compte" />
            </View>

            <Image source={require('@/assets/images/create-new-account-form.png')} style={styles.image} />

            <View style={styles.infosUser}>
                <View style={styles.input}>
                    <FontAwesome name="envelope" size={24}/>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.input}>
                    <FontAwesome name="lock" size={24} />
                    <TextInput
                        placeholder="Mot de Passe"
                        style={styles.textInput}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.input}>
                    <FontAwesome name="lock" size={24} />
                    <TextInput
                        placeholder="Confirmez le mot de Passe"
                        style={styles.textInput}
                        secureTextEntry={true}
                        value={confirmedPassword}
                        onChangeText={setConfirmedPassword}
                    />
                </View>
            </View>

            <BodyFont text={error} textStyle={{ color: 'red', marginTop: 20, paddingLeft: 10 }} />

            <View style={{ marginVertical: 'auto' }}>
                <CTABlueButton
                    text="Créer un compte"
                    onPress={createAccount}
                />
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

export default CreateAccountScreen;