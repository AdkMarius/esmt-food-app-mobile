import axios from "axios";
import {InsertTables, Tables} from "@/src/lib/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const insertOrders = async (order: InsertTables<'orders'>) => {

    try {
        const response =
            await axios.post(`${API_URL}/api/orders/create`, order);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};

export const readAllUserOrders = async (userId: string) => {
    try {
        const response =
            await axios.get(`${API_URL}/api/orders/details/${userId}`);

        return await response.data;
    } catch (error) {

    }
};