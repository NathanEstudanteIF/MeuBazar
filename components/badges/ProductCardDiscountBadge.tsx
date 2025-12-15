import { useTheme } from "@/contexts/ThemeProvider";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DiscountBadge({ value }: { value: number }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.badge, { backgroundColor: colors.subTint }]}>
      <Text style={[styles.text, { color: colors.tint }]}>-{Math.floor(value * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
