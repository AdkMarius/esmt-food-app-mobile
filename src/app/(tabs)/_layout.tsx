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
      >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: '',
        }}
      />
      <Tabs.Screen
        name="panier"
        options={{
          title: '',
        }}
      />
      <Tabs.Screen
        name="deco"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="logout" size={24} color={color} />          ),
        }}
      />
    </Tabs>
  );
}
