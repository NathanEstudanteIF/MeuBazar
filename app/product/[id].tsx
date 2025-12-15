import ProductImageCarousel from "@/components/caroussels/ProductImageCarrousel";
import ProductHeader from "@/components/headers/ProductHeader";
import ProductFooter from "@/components/sections/ProductFooter";
import ProductFreight from "@/components/sections/ProductFreight";
import { ProductPrice } from "@/components/sections/ProductPrice";
import ProductRating from "@/components/sections/ProductRating";
import ProductTitleInfo from "@/components/sections/ProductTitleInfo";
import ProductVariations from "@/components/sections/ProductVariations";
import { useTheme } from "@/contexts/ThemeProvider";
import { fetchProductById } from "@/services/products";
import { Product } from "@/types/models/product";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

export default function ProductDetails() {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    fetchProductById(Number(id)).then(setProduct);
  }, [id]);

  if (product == null) {
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />

        <View style={[styles.notFound, { backgroundColor: colors.background }]}>
          <ActivityIndicator size="large" color={colors.tint} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ProductHeader scrolled={scrolled} />

      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          onScroll={(e) => setScrolled(e.nativeEvent.contentOffset.y > 1)}
          showsVerticalScrollIndicator={false}
        >
          <ProductImageCarousel images={product.images} />

          <ProductVariations images={product.images} />

          <ProductPrice
            price={product.price}
          />

          <ProductTitleInfo title={product.title} />

          <ProductFreight />

          <ProductRating rating={product.rating} />
        </ScrollView>
      </View>

      <ProductFooter product={product} />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center" },
});
