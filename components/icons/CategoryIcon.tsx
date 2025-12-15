import { useTheme } from "@/contexts/ThemeProvider";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  image: any;
  label: string;
};

export default function CategoryIcon({ image, label }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} resizeMode="contain" />

      <Text style={[styles.label, { color: colors.text }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 70,
  },
  icon: {
    width: 46,
    height: 46,
  },
  label: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 10,
  },
});
