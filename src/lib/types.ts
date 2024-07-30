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
