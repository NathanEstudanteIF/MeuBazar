import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BannerCarousel from "@/components/caroussels/BannerCarousel";
import ProductsGrid from "@/components/grids/ProductsGrid";
import Header from "@/components/headers/Header";
import HorizontalScrollCategories from "@/components/scrolls/HorizontalScrollCategories";
import { useTheme } from "@/contexts/ThemeProvider";
import { bannerImages } from "@/data/bannerImages";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { colors, mode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar
        translucent
        backgroundColor={scrolled ? colors.background : "transparent"}
        barStyle={
          mode === "dark"
            ? "light-content"
            : "dark-content"
        }
      />

      <Header scrolled={scrolled} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => setScrolled(e.nativeEvent.contentOffset.y > 1)}
        scrollEventThrottle={16}
      >
        <BannerCarousel images={bannerImages} />
        <HorizontalScrollCategories categories={categories} />
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
