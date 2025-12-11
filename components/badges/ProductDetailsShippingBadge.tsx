import { ProductShippingType } from "@/types/enums/ProductShippingType";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function ProductDetailsShippingBadge({ type }: { type: ProductShippingType }) {
  if (type === ProductShippingType.NONE) return null;

  const imageSource =
    type === ProductShippingType.NATIONAL
      ? require("../../assets/images/shippingBadge/brazilShipping.png")
      : require("../../assets/images/shippingBadge/internationalShipping.png");

  return (
    <View style={styles.badge}>
      <Image 
        style={styles.image}
        source={imageSource}
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  image: {
    width: 310,
    height: 38,
  },
});
