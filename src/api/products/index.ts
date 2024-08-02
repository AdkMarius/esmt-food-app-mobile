import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const registerLogin = async (email: string, password: string, isLogin: boolean) => {
    const data = {
        email: email,
        password: password
    };

    const apiUrl = (isLogin) ?
        'https://aed4-41-82-9-76.ngrok-free.app/api/auth/sign-in' :
        'https://aed4-41-82-9-76.ngrok-free.app/api/auth/sign-up';

    const response = await axios.post(apiUrl, data);

    return await response.data;
};

export const loginUser = async (email: string, password: string) => {
    return registerLogin(email, password, true);
};

export const signUpUser = async (email: string, password: string) => {
    return registerLogin(email, password, false);
}

export const getUserDetails = async (id: string) => {
    const response = await axios.get(`https://aed4-41-82-9-76.ngrok-free.app/api/users/${id}`);

    return await response.data;
}