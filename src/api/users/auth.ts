import axios from "axios";

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

    return await response.data;
};

export const loginUser = async (email: string, password: string) => {
    return registerLogin(email, password, true);
};

export const signUpUser = async (email: string, password: string) => {
    return registerLogin(email, password, false);
}

export const getUserDetails = async (id: string) => {
    const response = await axios.get(`${API_URL}/app/api/users/${id}`);

    return await response.data;
}