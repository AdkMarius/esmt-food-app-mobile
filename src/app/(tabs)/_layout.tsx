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
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
        />
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
        { session ? (
            <Tabs.Screen
                name="auth"
                options={{
                    title: 'Sign-in',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
                    ),
                    headerShown: false
                }}
            />
        ) : (
            <Tabs.Screen
                name="auth"
                options={{
                    title: 'Sign-in',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
                    ),
                    headerShown: false
                }}
            />
        )}
    </Tabs>
  );
}
