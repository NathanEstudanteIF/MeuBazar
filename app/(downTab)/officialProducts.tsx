import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OfficialProductsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/error.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Função Indisponível</Text>
      <Text style={styles.subtitle}>
        Esta funcionalidade está em desenvolvimento.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Retornar ao Início</Text>
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
    backgroundColor: "#fff",
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
    color: "#444",
    lineHeight: 22,
    margin: 12,
  },
  button: {
    fontSize: 20,
    margin: 12,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ee4c2d",
  },
  buttonText: {
    fontSize: 16,
    color: "#ee4c2d",
  },
});
