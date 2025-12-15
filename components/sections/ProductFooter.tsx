import { useCart } from "@/contexts/CartProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import { Product } from "@/types/models/product";
import { ChatsCircleIcon, ShoppingCartSimpleIcon } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ProductFooterProps = {
  product?: Product;
};

export default function ProductFooter({ product }: ProductFooterProps) {
  const { colors } = useTheme();
  const { increaseFromCart } = useCart();

  const handleAddToCart = () => {
    if (product) increaseFromCart(product);
  };

  return (
    <View style={[styles.footer, { borderColor: colors.icon, backgroundColor: colors.background }]}>
      <TouchableOpacity style={[styles.chatButton, { backgroundColor: colors.background }]}>
        <ChatsCircleIcon size={32} color={colors.tint} />
      </TouchableOpacity>

      <View style={[styles.divider, { backgroundColor: colors.icon }]} />

      <TouchableOpacity
        style={[styles.cartButton, { backgroundColor: colors.background }]}
        onPress={handleAddToCart}
      >
        <ShoppingCartSimpleIcon size={32} color={colors.tint} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buyButton, { backgroundColor: colors.tint }]}
        onPress={handleAddToCart}
      >
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
  },
  chatButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButton: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    height: 36,
    alignSelf: "center",
  },
});
