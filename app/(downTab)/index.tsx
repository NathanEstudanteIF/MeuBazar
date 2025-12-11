import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BannerCarousel from "@/components/caroussels/BannerCarousel";
import ProductsGrid from "@/components/grids/ProductsGrid";
import Header from "@/components/headers/Header";
import Advertiser from "@/components/misc/Advertiser";
import HorizontalScrollCategories from "@/components/scrolls/HorizontalScrollCategories";
import { bannerImages } from "@/data/bannerImages";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [scrolled, setScrolled] = useState(false);

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <StatusBar
        translucent
        backgroundColor={scrolled ? "#fff" : "transparent"}
        barStyle={scrolled ? "dark-content" : "light-content"}
      />

      <Header scrolled={scrolled} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => setScrolled(e.nativeEvent.contentOffset.y > 1)}
      >
        <BannerCarousel images={bannerImages} />

        <HorizontalScrollCategories categories={categories} />

        <Advertiser source={require("../../assets/images/advertiser.jpg")} />

        <ProductsGrid products={products} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
