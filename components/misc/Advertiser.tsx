import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Props = {
  source: any;
};

export default function Advertiser({ source }: Props) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: -10,
    padding: 4,
  },
  image: {
    width: '100%',
    height: 140,

  },
});
