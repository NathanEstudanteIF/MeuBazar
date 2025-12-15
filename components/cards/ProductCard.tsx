import { Product } from "@/types/models/product";
import { router } from "expo-router";
import { DotsThreeIcon } from "phosphor-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "@/contexts/ThemeProvider";
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.productCard,
        { backgroundColor: colors.background },
      ]}
      onPress={() =>
        router.push({
          pathname: "/product/[id]",
          params: { id: product.id },
        })
      }
    >
      <View style={styles.productImageContainer}>
        <Image resizeMode="contain" source={product.images[0]} style={styles.productImage} />
      </View>

      <View style={styles.productInfo}>
        <Text
          style={[styles.productTitle, { color: colors.text }]}
          numberOfLines={2}
        >
          {product.title}
        </Text>

        <View style={styles.productFooter}>
          <Text style={[styles.productPrice, { color: colors.tint }]}>
            R$ {product.price.toFixed(2)}
          </Text>

          <DotsThreeIcon size={18} color={colors.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: "48%",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  productImageContainer: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 180,
  },
  productInfo: {
    padding: 8,
  },
  productTitle: {
    fontSize: 13,
    flexShrink: 1,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productSales: {
    fontSize: 10,
  },
});
