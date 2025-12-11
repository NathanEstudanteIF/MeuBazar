import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DiscountBadge({ value }: { value: number }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>-{Math.floor(value * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fef0e7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  text: {
    color: "#df9383",
    fontWeight: "bold",
    fontSize: 14,
  },
});
