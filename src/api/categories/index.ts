import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const readAllCategory = async () => {
    try {
        const response =
            await axios.get(`${API_URL}/api/categories`);

        return await response.data;
    } catch (error) {

    }
}