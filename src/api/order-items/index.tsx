import axios from "axios";
import {InsertTables} from "@/src/lib/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const insertOrderItems = async (orderItems: InsertTables<'order_items'>[]) => {
    try {
        const response =
            await axios.post(`${API_URL}/api/orders-items`, orderItems);

        return await response.data;
    } catch (error) {
        console.error(error);
    }
};