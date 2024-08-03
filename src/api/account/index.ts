import axios from "axios";
import {InsertTables, Tables} from "@/src/lib/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const readUserBalance = async (id: string) => {
    try {
        const response =
            await axios.get(`${API_URL}/api/balance/${id}`);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updateBalanceUser = async (id: string, balance: number) => {
    const data = {
        balance: balance
    };

    try {
        const response =
            await axios.put(`${API_URL}/api/balance/${id}`, data);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createNewUserBalance = async (userId: string) => {
    const data: InsertTables<'account'> = {
        user_id: userId,
        balance: 0
    };

    try {
        const response =
            await axios.post(`${API_URL}/api/balance/`, data);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};