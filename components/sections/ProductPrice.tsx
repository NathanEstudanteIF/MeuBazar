import { useTheme } from "@/contexts/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRightIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

type ProductPriceProps = {
  price: number;
};

export function ProductPrice({ price }: ProductPriceProps) {
  const { colors, mode } = useTheme();

  return (
    <LinearGradient
      colors={
        mode === "light"
          ? [colors.background, colors.subTint]
          : [colors.background, colors.tint]
      }
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={[styles.priceColumn, { borderColor: colors.icon }]}
    >
      <View style={styles.priceRow}>
        <Text style={[styles.priceCoin, { color: colors.tint }]}>R$</Text>
        <Text style={[styles.priceNumber, { color: colors.tint }]}>
          {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={[styles.parcelsText, { color: colors.text }]}>
          Em até 12x R${" "}
          {(price / 12).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </Text>
        <ArrowRightIcon color={colors.icon} size={16} style={styles.parcelsIcon} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  priceColumn: {
    padding: 12,
    borderBottomWidth: 1,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  priceCoin: { fontSize: 20 },
  priceNumber: { fontSize: 28 },
  oldPrice: {
    marginLeft: 6,
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  discount: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    bottom: 4,
    marginLeft: 6,
    fontSize: 14,
  },
  sales: {
    bottom: 6,
    marginLeft: "auto",
    flexDirection: "row",
  },
  salesInfo: { fontSize: 13 },
  salesIcon: { marginLeft: 4 },
  parcelsText: { fontSize: 13 },
  parcelsIcon: { marginLeft: 1, alignSelf: "flex-end" },
});
