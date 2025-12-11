import ProductImageCarousel from "@/components/caroussels/ProductImageCarrousel";
import ProductHeader from "@/components/headers/ProductHeader";
import { LightningOffer } from "@/components/sections/LightningOffer";
import ProductFooter from "@/components/sections/ProductFooter";
import ProductFreight from "@/components/sections/ProductFreight";
import ProductParcels from "@/components/sections/ProductParcels";
import { ProductPrice } from "@/components/sections/ProductPrice";
import ProductRating from "@/components/sections/ProductRating";
import ProductTitleInfo from "@/components/sections/ProductTitleInfo";
import ProductVariations from "@/components/sections/ProductVariations";
import { products } from "@/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProductDetails() {
  const [scrolled, setScrolled] = useState(false);

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <Text>Produto não encontrado.</Text>;

  return (
    <>
        <Stack.Screen options={{ headerShown: false }} />
        
        <ProductHeader scrolled={scrolled} />

        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                onScroll={(e) => setScrolled(e.nativeEvent.contentOffset.y > 1)}
            >
                <ProductImageCarousel type={product.shipping} images={product.images} />

                <ProductVariations images={product.images} />

                <LightningOffer />

                <ProductPrice price={product.price} discount={product.discount} sales={product.sales} />

                <ProductTitleInfo type={product.badge} title={product.title} />

                <ProductFreight />

                <ProductParcels />

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
    backgroundColor: "#eee" 
},
  header: {
    position: "absolute",
    top: 40,
    left: 15,
    right: 15,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
  },
  mainImage: {
    width: "100%",
    height: 420,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    padding: 12,
    paddingBottom: 18,
  },
});
