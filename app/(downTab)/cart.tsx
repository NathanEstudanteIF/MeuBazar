import { useTheme } from "@/contexts/ThemeProvider";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CartScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("@/assets/images/error.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={[styles.title, { color: colors.text }]}>
        Função Indisponível
      </Text>

      <Text style={[styles.subtitle, { color: colors.icon }]}>
        Esta funcionalidade está em desenvolvimento.
      </Text>

      <TouchableOpacity
        style={[styles.button, { borderColor: colors.tint }]}
        onPress={() => router.push("/")}
      >
        <Text style={[styles.buttonText, { color: colors.tint }]}>
          Retornar ao Início
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 240,
    height: 240,
    margin: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    margin: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    margin: 12,
  },
  button: {
    margin: 12,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
  },
});
