import { useTheme } from "@/contexts/ThemeProvider";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type ProductImages = {
  images: any[];
};

export default function ProductVariations({ images }: ProductImages) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.variationsContainer,
        { backgroundColor: colors.background },
      ]}
    >
      <Text
        style={[
          styles.variationsLabel,
          { color: colors.icon },
        ]}
      >
        {images.length} Variações Disponíveis
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((img, index) => (
          <Image
            key={index}
            source={img}
            style={[
              styles.variationImage,
              { borderColor: colors.icon },
            ]}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  variationsContainer: {
    padding: 10,
  },
  variationsLabel: {
    marginBottom: 12,
    fontSize: 14,
  },
  variationImage: {
    width: 60,
    height: 60,
    borderRadius: 2,
    marginRight: 10,
    borderWidth: 1,
  },
});
