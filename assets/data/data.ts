import { Product, Category, Order } from "@/src/lib/types";
import dayjs from "dayjs";

const now = dayjs();

export const categories: Category[] = [
    {
        id: 1,
        name: "Plats",
        image: "@/assets/images/yassa-poulet.png"
    },
    {
        id: 2,
        name: "Boissons",
        image: "@/assets/images/sprite.png"
    },
    {
        id: 3,
        name: "Fast food",
        image: "@/assets/images/burger.png"
    },
    {
        id: 4,
        name: "Snacks",
        image: "@/assets/images/biskrem.png"
    }
];

export const products: Product[] = [
    {
        id: 1,
        name: "Jus de Bissap",
        price: 350,
        available: true,
        image: "@/assets/images/bissap.png",
        id_category: 2
    },
    {
        id: 2,
        name: "Yassa poulet",
        price: 1000,
        available: true,
        image: "@/assets/images/yassa-poulet.png",
        id_category: 1
    },
    {
        id: 3,
        name: "Tchiéboudiène poisson",
        price: 800,
        available: true,
        image: "@/assets/images/tchep-poisson.png",
        id_category: 1
    },
    {
        id: 4,
        name: "Biskrem",
        price: 200,
        available: true,
        image: "@/assets/images/biskrem.png",
        id_category: 4
    },
    {
        id: 5,
        name: "Ikram",
        price: 150,
        available: true,
        image: "@/assets/images/ikram.png",
        id_category: 4
    },
    {
        id: 6,
        name: "Coca Cola",
        price: 350,
        available: true,
        image: "@/assets/images/coca-cola.png",
        id_category: 2
    },
    {
        id: 7,
        name: "Sprite",
        price: 350,
        available: true,
        image: "@/assets/images/sprite.png",
        id_category: 2
    },
    {
        id: 8,
        name: "Pain avec viande hachée",
        price: 500,
        available: true,
        image: "@/assets/images/viande-hachee.png",
        id_category: 3
    },
    {
        id: 9,
        name: "Pain norvègienne",
        price: 700,
        available: true,
        image: "@/assets/images/norvegienne.png",
        id_category: 3
    },
    {
        id: 10,
        name: "Hamburger",
        price: 1000,
        available: true,
        image: "@/assets/images/burger.png",
        id_category: 3
    },
];

export const orders: Order[] = [
    {
        id: 34567,
        created_at: now.subtract(1, 'hour').toISOString(),
        status: 'New',
        total_price: 5200,
        user_id: 1,
        order_items: [
            {
                id: 1,
                product_id: 2,
                order_id: 34567,
                quantity: 3
            },
            {
                id: 2,
                product_id: 7,
                order_id: 34567,
                quantity: 4
            }
        ]
    },
    {
        id: 37890,
        created_at: now.subtract(1, 'hour').toISOString(),
        status: 'Delivering',
        total_price: 1150,
        user_id: 2,
        order_items: [
            {
                id: 1,
                product_id: 3,
                order_id: 37890,
                quantity: 1
            },
            {
                id: 2,
                product_id: 6,
                order_id: 37890,
                quantity: 1
            }
        ]
    },
    {
        id: 98704,
        created_at: now.subtract(1, 'hour').toISOString(),
        status: 'Delivered',
        total_price: 3100,
        user_id: 3,
        order_items: [
            {
                id: 1,
                product_id: 9,
                order_id: 98704,
                quantity: 2
            },
            {
                id: 2,
                product_id: 10,
                order_id: 98704,
                quantity: 1
            },
            {
                id: 3,
                product_id: 1,
                order_id: 98704,
                quantity: 2
            }
        ]
    },
];