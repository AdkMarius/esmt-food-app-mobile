import React, { useEffect, useState } from "react";
import {StyleSheet, ActivityIndicator, FlatList, Pressable, View} from "react-native";
import { Colors } from "@/src/constants/Colors";
import Historic from "@/src/components/Historic";
import { supabase } from "@/src/lib/supabaseClient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Stack, useRouter} from "expo-router";
import {useAuth} from "@/src/providers/AuthProvider";
import {FontAwesome} from "@expo/vector-icons";
import UserNotLogin from "@/src/components/UserNotLogin";
import { SafeAreaView } from "react-native-safe-area-context";

type OrderItem = {
  id: number;
  product_id: number;
  order_id: number;
  quantity: number;
};

type Product = {
  id: number;
  image: string;
};

type Order = {
  id: number;
  created_at: string;
  status: string;
  total_price: number; 
  user_id: number;
  order_items: OrderItem[];
  product_images?: string[];
};

const Favoris = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { session, profile , signOut } = useAuth();

  if (!session) {
    return (
        <SafeAreaView edges={['top']} style={styles.container}>
          <Stack.Screen
              options={{
                headerShown: false
              }}
          />
          <Pressable style={styles.iconHeader} onPress={() => {router.back()}}>
            <FontAwesome name='arrow-left' size={24} />
          </Pressable>

          <UserNotLogin />
        </SafeAreaView>
    );
  }

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select('id, created_at, status, total_price, user_id, order_items(product_id)')
        .eq('user_id', session?.id)
        .order('created_at', { ascending: false });

      if (ordersError) {
        console.error(ordersError);
        setLoading(false);
        return;
      }

      const productIds = ordersData.flatMap(order =>
        order.order_items.map(item => item.product_id)
      );

      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('id, image')
        .in('id', productIds);

      if (productsError) {
        console.error(productsError);
        setLoading(false);
        return;
      }

      const productImages = new Map<number, string>();
      productsData.forEach(product => {
        productImages.set(product.id, product.image);
      });

      const enrichedOrders = ordersData.map(order => {
        const productImagesForOrder = order.order_items.map(item => productImages.get(item.product_id));
        return { ...order, product_images: productImagesForOrder };
      });

      setOrders(enrichedOrders);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.light.background} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Historic
            order={item} 
            icon={<MaterialIcons name="drive-file-rename-outline" size={24} color="#0F8ACE" style={styles.icon} />}
          />
        )}
        contentContainerStyle={{ gap: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 15
  },
  icon: {
    marginLeft: 10,
  },
  iconHeader: {
    width: 48,
    aspectRatio: 1,
    backgroundColor: '#f4f4f4',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginBottom: 20
  },
});

export default Favoris;
