import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const readAllProducts = async () => {
    try {
        const response =
            await axios.get(`${API_URL}/api/products/list`);

        return await response.data;
    } catch (error) {

    }
};

export const readDayMenu = async () => {
    try {
        const response =
            await axios.get(`${API_URL}/api/products/day-menu`);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};

export const readProductById = async (id : number) => {
    try {
        const response =
            await axios.get(`${API_URL}/api/products/${id}`);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};