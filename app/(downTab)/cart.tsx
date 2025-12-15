import { useCart } from "@/contexts/CartProvider";
import { useTheme } from "@/contexts/ThemeProvider";
import { TrashIcon } from "phosphor-react-native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CartScreen() {
  const { cart, removeFromCart, increaseFromCart, decreaseFromCart } = useCart();
  const { colors } = useTheme();

  if (cart.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.emptyText, { color: colors.tint }]}>
          Seu carrinho está vazio
        </Text>
      </View>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={[styles.pageTitle, { color: colors.tint }]}>Meu Carrinho</Text>

        {cart.map((item) => (
          <View key={item.product.id} style={[styles.itemContainer, { borderColor: colors.tint }]}>
            <Image resizeMode="contain" source={{ uri: item.product.images[0] }} style={styles.image} />

            <View style={styles.info}>
              <Text style={[styles.itemTitle, { color: colors.text }]}>{item.product.title}</Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decreaseFromCart(item.product)} style={[styles.qtyButton, { backgroundColor: colors.subBackground }]}>
                  <Text style={[styles.quantityText, { color: colors.tint }]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.quantityText, { color: colors.text }]}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseFromCart(item.product)} style={[styles.qtyButton, { backgroundColor: colors.subBackground }]}>
                  <Text style={[styles.quantityText, { color: colors.tint }]}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.priceContainer}>
                <Text style={[styles.priceText, { color: colors.tint }]}>
                  R$ {(item.product.price * item.quantity).toFixed(2)}
                </Text>
                <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
                  <TrashIcon color={colors.tint} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.totalContainer, { borderTopColor: colors.icon, backgroundColor: colors.background }]}>
        <Text style={[styles.totalText, { color: colors.tint }]}>Total: R$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: "600", 
    fontSize: 24,
    margin: 16,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "700",
    margin: 12,
  },
  itemContainer: { 
    flexDirection: "row", 
    padding: 16, 
    margin: 8,
    borderWidth: 2,
    borderRadius: 12,
  },
  image: { 
    width: 80, 
    height: 80, 
    marginRight: 12 
  },
  info: { 
    flex: 1, 
    justifyContent: "space-between" 
  },
  itemTitle: { 
    fontWeight: "600", 
    fontSize: 16,
    marginBottom: 8
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  qtyButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "600",
  },
  totalContainer: { 
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    alignItems: "flex-end",
  },
  totalText: { 
    fontSize: 18, 
    fontWeight: "600",
  },
});
