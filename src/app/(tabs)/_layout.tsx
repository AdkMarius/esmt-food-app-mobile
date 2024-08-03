import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';
import {useAuth} from "@/src/providers/AuthProvider";

export default function TabLayout() {
    const { session } = useAuth();

  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: Colors.light.tintBlue,
        }}>
        <Tabs.Screen
            name="menu"
            options={{
                title: 'Menu',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
                ),
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="cart"
            options={{
                title: 'Cart',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />
                ),
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'card' : 'card-outline'} color={color} />
                ),
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="favorite"
            options={{
                title: 'Favorite',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
