import { Database } from './database.types';

export type Tables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Row'];

export type InsertTables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Insert'];

export type UpdateTables<T extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][T]['Update'];

export type Enums<T extends keyof Database['public']['Enums']> =
    Database['public']['Enums'][T];

export type Product = {
  id: number;
  name: string;
  available: boolean;
  price: number;
  image: string;
  id_category: number;
};

export type Category = {
  id: number;
  name: string;
  image: string;
}

export type Evaluation = {
  id: number;
  number_star: number;
  evaluation_text: string | undefined;
  id_product: number;
  id_user: number;
}

export type CartItem = {
  id: string;
  product: Tables<'products'>;
  product_id: number;
  quantity: number;
};

export const OrderStatusList: OrderStatus[] = [
  'New',
  'Delivering',
  'Delivered',
];

export type OrderStatus = 'New' | 'Delivering' | 'Delivered';

export type Order = {
  id: number;
  created_at: string;
  total_price: number;
  user_id: number;
  status: OrderStatus;
  order_items?: OrderItem[];
  
};

export type OrderItem = {
  id: number;
  product_id: number;
  order_id: number;
  quantity: number;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  image: string | undefined;
}

export type CheckoutData = {
  items: CartItem[],
  total_price: number
};