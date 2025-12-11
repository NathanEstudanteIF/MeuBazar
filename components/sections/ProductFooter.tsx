import { ChatsCircleIcon, ShoppingCartSimpleIcon } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ProductFooter() {
    
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.chatButton}>
                <ChatsCircleIcon size={32} color="#ee4c2d" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.cartButton}>
                <ShoppingCartSimpleIcon size={32} color="#ee4c2d" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyText}>Compre agora</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
footer: {
    flexDirection: "row",
    height: 55,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  chatButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cartButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buyButton: {
    flex: 2,
    backgroundColor: "#ee4c2d",
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: {
    color: "#fff",
    fontSize: 16,
  },
  footerText: {
    color: "#444",
    fontSize: 12,
  },
  divider: {
    width: 1,
    backgroundColor: "#888",
    height: 36,
    alignSelf: "center",
  },
});