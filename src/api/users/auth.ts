import axios from "axios";
import {Alert} from "react-native";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const registerLogin = async (email: string, password: string, isLogin: boolean) => {
    const data = {
        email: email,
        password: password
    };

    const apiUrl = (isLogin) ?
        `${API_URL}/api/auth/sign-in` :
        `${API_URL}/api/auth/sign-up`;

    const response = await axios.post(apiUrl, data);
    if (response.status === 400 || response.status === 500) {
        Alert.alert('Error', 'Veuillez entrer un email et un mot de passe valide');
    }

    if (response.status === 200)
        return await response.data;

    return null;

};

export const loginUser = async (email: string, password: string) => {
    return registerLogin(email, password, true);
};

export const signUpUser = async (email: string, password: string) => {
    return registerLogin(email, password, false);
}

export const getUserDetails = async (id: string) => {
    const response = await axios.get(`${API_URL}/api/users/${id}`);

    return await response.data;
}