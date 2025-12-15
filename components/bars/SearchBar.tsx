import { useTheme } from "@/contexts/ThemeProvider";
import { CameraIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import { StyleSheet, TextInput, View } from "react-native";
export default function SearchBar() {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.searchBar,
        { backgroundColor: colors.subBackground },
      ]}
    >
      <MagnifyingGlassIcon
        size={20}
        weight="regular"
        color={colors.icon}
      />

      <TextInput
        placeholder="Buscar em Meu Bazar"
        placeholderTextColor={colors.icon}
        style={[
          styles.searchInput,
          { color: colors.text },
        ]}
      />

      <CameraIcon
        size={20}
        weight="regular"
        color={colors.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
});
