import Badge from "@/components/badges/IconNotificationBadge";
import { HapticTab } from "@/components/haptic-tab";
import { useTheme } from "@/contexts/ThemeProvider";
import { Tabs } from "expo-router";
import {
  BellIcon,
  HouseIcon,
  ShoppingCartIcon,
  UserIcon
} from "phosphor-react-native";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingTop: 8,
          height: 66,
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingTop: 4,
        },
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.icon,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <HouseIcon
              size={32}
              color={color}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color, focused }) => (
            <ShoppingCartIcon
              size={32}
              color={color}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificações",
          tabBarIcon: ({ color, focused }) => (
            <View>
              <BellIcon
                size={32}
                color={color}
                weight={focused ? "fill" : "regular"}
              />
              <Badge count={13} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          tabBarIcon: ({ color, focused }) => (
            <UserIcon
              size={32}
              color={color}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
