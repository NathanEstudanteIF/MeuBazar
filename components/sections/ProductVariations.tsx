import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type ProductImages = {
  images: any[];
};

export default function ProductVariations({ images }: ProductImages) {
  return (
    <View style={styles.variationsContainer}>
      <Text style={styles.variationsLabel}>
        {images.length} Variações Disponíveis
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.variationImage} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  variationsContainer: {
    backgroundColor: "#fff",
    padding: 10,
  },
  variationsLabel: {
    marginBottom: 12,
    fontSize: 14,
    color: "#999",
  },
  variationImage: {
    width: 60,
    height: 60,
    borderRadius: 2,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#999",
  },
});
