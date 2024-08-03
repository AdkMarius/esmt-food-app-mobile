import React, {useMemo, useState} from "react";
import {Alert, Keyboard, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {useAuth} from "@/src/providers/AuthProvider";
import {SafeAreaView} from "react-native-safe-area-context";
import {Stack, useRouter} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import UserNotLogin from "@/src/components/UserNotLogin";
import {Colors} from "@/src/constants/Colors";
import HeaderFont from "@/src/components/typography/HeaderFont";
import BodyFont from "@/src/components/typography/BodyFont";
import TitleFont from "@/src/components/typography/TitleFont";
import {RadioButton} from "react-native-radio-buttons-group";
import BodyFontHighlight from "@/src/components/typography/BodyFontHighlight";
import CTABlueButton from "@/src/components/button/CTABlueButton";

const AccountScreen = () => {
    const router = useRouter();
    const { session, profile, updateBalance , balance } = useAuth();

    const [isOrangeSelected, setIsOrangeSelected] = useState<boolean>(false);
    const [isWaveSelected, setIsWaveSelected] = useState<boolean>(false);
    const [price, setPrice] = useState<string>();

    const addMoney = async () => {
        const isOkay = await updateBalance(parseFloat(price as string));

        if (isOkay) {
            Alert.alert('Succès', 'Le montant a été ajouté avec succès');
            setPrice('');
            setIsWaveSelected(false);
            setIsOrangeSelected(false);
        } else {
            Alert.alert('Error', 'Veuillez réessayer svp');
        }
    }

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

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <HeaderFont text="Mon portefeuille" textStyle={{ textAlign: 'center', marginBottom: 50}}/>

                    <View style={[styles.priceContainer, styles.section]}>
                        <BodyFont text="Solde" textStyle={{ color: '#fff' }} />
                        <View style={styles.price}>
                            <HeaderFont text={balance.toString() as string} textStyle={{ color: '#fff' }}/>
                            <HeaderFont text="Fcfa" textStyle={{ color: '#fff' }} />
                        </View>
                    </View>

                    <View style={[styles.account, styles.section]}>
                        <TitleFont text="Recharger mon compte" />

                        <View style={styles.radioButton}>
                            <RadioButton
                                id='1'
                                borderColor={Colors.light.tintBlue}
                                onPress={() => {
                                    setIsWaveSelected(false);
                                    setIsOrangeSelected(true)
                                }}
                                selected={isOrangeSelected}
                            />
                            <BodyFontHighlight text="Orange Money" />
                        </View>

                        <View style={styles.radioButton}>
                            <RadioButton
                                id='2'
                                borderColor={Colors.light.tintBlue}
                                onPress={() => {
                                    setIsOrangeSelected(false);
                                    setIsWaveSelected(true);
                                }}
                                selected={isWaveSelected}
                            />
                            <BodyFontHighlight text="Wave Money" />
                        </View>
                    </View>

                    <View style={[styles.money, styles.section]}>
                        <TitleFont text="Montant" />
                        <View style={styles.input}>
                            <TextInput
                                placeholder="0"
                                style={styles.textInput}
                                value={price}
                                onChangeText={setPrice}
                                keyboardType={"numeric"}
                            />
                        </View>
                    </View>

                    <CTABlueButton
                        text="Recharger le compte"
                        style={{ marginTop: 40}}
                        onPress={() => {addMoney()}}
                    />
                </View>
            </TouchableWithoutFeedback>

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
    section: {
        marginBottom: 50,
    },
    priceContainer: {
        backgroundColor: Colors.light.tintBlue,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 20,
        height: 100
    },
    price: {
        color: '#fff',
        flexDirection: 'row',
        columnGap: 10
    },
    account: {
        justifyContent: 'flex-start',
        rowGap: 20
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center'
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
    money: {
        rowGap: 20
    }
});

export default AccountScreen;