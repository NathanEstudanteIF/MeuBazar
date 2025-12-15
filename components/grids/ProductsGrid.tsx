import { useTheme } from "@/contexts/ThemeProvider";
import { Product } from "@/types/models/product";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import ProductCard from "../cards/ProductCard";

type Props = {
  products: Product[];
};

export default function ProductsGrid({ products }: Props) {
  const { colors, mode } = useTheme();

  return (
    <LinearGradient
      colors={
        [colors.background, colors.subBackground]
      }
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.grid}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    padding: 12,
    gap: 12,
    width: "100%",
  },
});
