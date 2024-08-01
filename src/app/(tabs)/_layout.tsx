import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tintGreen,
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
          title: 'menu',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="menu" size={24} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="panier"
        options={{
          title: 'panier',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="shopping-cart" size={24} color={color} />          ),
        }}
      />
      <Tabs.Screen
        name="deco"
        options={{
          title: 'deconnexion',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="logout" size={24} color={color} />          ),
        }}
      />
    </Tabs>
  );
}
