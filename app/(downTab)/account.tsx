import { useTheme } from "@/contexts/ThemeProvider";
import { useRouter } from "expo-router";
import { MoonIcon, SunIcon } from "phosphor-react-native";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AccountScreen() {
  const router = useRouter();
  const { colors, mode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>

      </View>
      <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
        {
          mode === "light" ?
            <SunIcon
              size={32}
              color={colors.tint}
              weight={'fill'}>
            </SunIcon> 
            : 
            <MoonIcon
              size={32}
              color={colors.tint}
              weight={'fill'}>
            </MoonIcon>
        }
      </TouchableOpacity>

      <View style={[styles.avatar, { borderColor: colors.tint }]}>
        <Image
          source={require("@/assets/images/error.png")}
          style={styles.avatarImage}
        />
      </View>

      <Text style={[styles.name, { color: colors.text }]}>
        Usuário Exemplo
      </Text>
      <Text style={[styles.email, { color: colors.icon }]}>
        usuario@email.com
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    margin: 0,
  },
  themeToggle: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignSelf: "flex-end"
  },
  avatar: {
    marginTop: 40,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
});
