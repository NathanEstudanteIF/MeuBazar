import { ProductBadgeType } from "@/types/enums/ProductBadgeType";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BadgeTypeBadge({ type }: { type: ProductBadgeType }) {
  if (type === ProductBadgeType.NONE) return null;

  const label =
    type === ProductBadgeType.INDICATE
      ? "Indicado"
      : type === ProductBadgeType.OFICIAL
      ? "Oficial"
      : "";

  return (
    <View 
      style={[
        styles.badge, 
        type === ProductBadgeType.OFICIAL && { backgroundColor: "#cf001a" },
      ]}>
      <Text
        style={[
          styles.text,
          type === ProductBadgeType.OFICIAL && { fontStyle: "italic" },
        ]}
      >{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#ee4c2d",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
