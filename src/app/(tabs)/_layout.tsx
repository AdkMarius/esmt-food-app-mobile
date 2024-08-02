import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TabBar from '../../components/TabBar'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        tabBar={props => <TabBar {...props} />}
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
