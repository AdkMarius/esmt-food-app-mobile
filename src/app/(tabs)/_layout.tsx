import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';

export default function TabLayout() {

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
            name="(menu)"
            options={{
                title: 'Menu',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
                ),
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="(auth)"
            options={{
                title: 'Auth',
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
                ),
                headerShown: false
            }}
        />

    </Tabs>
  );
}
