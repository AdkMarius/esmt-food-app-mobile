import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Colors } from "@/src/constants/Colors";
import Historique from "@/src/components/Historique";
import { supabase } from "@/src/lib/supabaseClient";

type Order = {
  id: number;
  image: string;
  created_at: string;
  status: string;
  total_price: number;
  user_id: number;
  order_items: Array<{
    id: number;
    product_id: number;
    order_id: number;
    quantity: number;
  }>;
};

const HistoriquePage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            const { data, error } = await supabase
                .from('orders')
                .select('*');

            if (error) {
                console.error(error);
            } else {
                setOrders(data);
            }

            setLoading(false);
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color={Colors.light.background} />;
    }

    return (
        <SafeAreaView  style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Historique order={item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
});

export default HistoriquePage;
