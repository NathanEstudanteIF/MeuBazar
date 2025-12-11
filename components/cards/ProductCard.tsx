import { Product } from "@/types/models/product";
import { DotsThreeIcon } from "phosphor-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import DiscountBadge from "../badges/ProductCardDiscountBadge";
import ShippingBadge from "../badges/ProductCardShippingBadge";
import BadgeTypeBadge from "../badges/ProductCardTypeBadge";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => router.push({
        pathname: "/product/[id]",
        params: { id: product.id },
      })}
    >
      <View style={styles.productImageContainer}>
        <Image source={ product.images[0] } style={styles.productImage} />

        <ShippingBadge type={product.shipping} />
        {product.discount > 0 && <DiscountBadge value={product.discount} />}
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          <BadgeTypeBadge type={product.badge} />
          {product.title}
        </Text>

        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>

          {product.sales > 1000 && (
            <Text style={styles.productSales}>
              {Math.floor(product.sales / 1000)}mil+ vendidos
            </Text>
          )}

          <DotsThreeIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
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
    color: "#ee4c2d",
    fontSize: 16,
    fontWeight: "bold",
  },
  productSales: {
    fontSize: 10,
  },
});
