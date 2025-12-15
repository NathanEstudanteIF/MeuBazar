import ProductImageCarousel from "@/components/caroussels/ProductImageCarrousel";
import ProductHeader from "@/components/headers/ProductHeader";
import ProductFooter from "@/components/sections/ProductFooter";
import ProductFreight from "@/components/sections/ProductFreight";
import { ProductPrice } from "@/components/sections/ProductPrice";
import ProductRating from "@/components/sections/ProductRating";
import ProductTitleInfo from "@/components/sections/ProductTitleInfo";
import ProductVariations from "@/components/sections/ProductVariations";
import { useTheme } from "@/contexts/ThemeProvider";
import { products } from "@/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProductDetails() {
  const [scrolled, setScrolled] = useState(false);
  const { colors } = useTheme();

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <View style={[styles.notFound, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ProductHeader scrolled={scrolled} />

      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          onScroll={(e) =>
            setScrolled(e.nativeEvent.contentOffset.y > 1)
          }
        >
          <ProductImageCarousel images={product.images} />

          <ProductVariations images={product.images} />

          <ProductPrice
            price={product.price}
            discount={product.discount}
            sales={product.sales}
          />

          <ProductTitleInfo title={product.title} />

          <ProductFreight />

          <ProductRating />

        </ScrollView>

        <ProductFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
