import { useTheme } from "@/contexts/ThemeProvider";
import { CaretRightIcon, TruckIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ProductFreight() {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.freightBox,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.icon,
        },
      ]}
    >
      <TruckIcon size={20} color={colors.tint} style={styles.truckIcon} />

      <Text style={[styles.freightLabelText, { color: colors.tint }]}>
        Frete grátis
      </Text>

      <Text style={[styles.oldPrice, { color: colors.icon }]}>
        R$15,69
      </Text>

      <Text style={[styles.freightDesc, { color: colors.text }]}>
        R$0,00 com cupom
      </Text>

      <CaretRightIcon
        color={colors.icon}
        size={18}
        style={styles.caretIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  freightBox: {
    flexDirection: "row",
    alignItems: "baseline",
    padding: 12,
    borderBottomWidth: 1,
  },
  freightLabelText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  truckIcon: {
    marginLeft: 1,
    alignSelf: "flex-end",
  },
  caretIcon: {
    marginLeft: "auto",
  },
  oldPrice: {
    marginHorizontal: 3,
    fontSize: 16,
    textDecorationLine: "line-through",
  },
  freightDesc: {
    marginHorizontal: 3,
    fontSize: 16,
  },
});
