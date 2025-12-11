import Badge from '@/components/badges/IconNotificationBadge';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { BellIcon, HouseIcon, ShoppingBagIcon, UserIcon, VideoCameraIcon } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          paddingTop: 4,
        },
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <HouseIcon
              size={28}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
 
      <Tabs.Screen
        name="officialProducts"
        options={{
          title: 'Oficiais',
          tabBarIcon: ({ color, focused }) => (
            <ShoppingBagIcon
              size={28}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="live"
        options={{
          title: 'Live e Vídeo',
          tabBarIcon: ({ color, focused }) => (
            <VideoCameraIcon
              size={28}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color, focused }) => (
            <View>
              <BellIcon
                size={28}
                color={color}
                weight={focused ? 'fill' : 'regular'}
              ></BellIcon>
              <Badge count={13}></Badge>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Eu',
          tabBarIcon: ({ color, focused }) => (
            <UserIcon
              size={28}
              color={color}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
    </Tabs>
  );

}