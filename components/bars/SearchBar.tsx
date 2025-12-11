import { CameraIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {

    return (
        <View style={styles.searchBar}>
            <MagnifyingGlassIcon size={20} color="#777" weight="regular" />
            <TextInput
                placeholder="Buscar em Meu Bazar"
                placeholderTextColor="#ee4c2d"
                style={styles.searchInput}
            />
            <CameraIcon size={20} color="#777" weight="regular" />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#777",
  },
})