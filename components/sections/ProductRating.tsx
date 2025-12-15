import { useTheme } from "@/contexts/ThemeProvider";
import { CaretRightIcon, StarIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ProductRating() {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.ratingBox,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.icon,
        },
      ]}
    >
      <Text style={[styles.ratingNumber, { color: colors.text }]}>4.9</Text>

      <View style={styles.ratingIcon}>
        <StarIcon size={20} weight="fill" color="#FFC317" />
      </View>

      <Text style={[styles.ratingSubtitle, { color: colors.text }]}>
        Avaliações do produto (257)
      </Text>

      <Text style={[styles.caretIconText, { color: colors.icon }]}>
        Ver mais
      </Text>

      <CaretRightIcon color={colors.icon} size={18} style={styles.caretIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 32,
    padding: 12,
    borderBottomWidth: 1,
  },
  ratingNumber: {
    fontSize: 24,
    fontWeight: "600",
  },
  ratingSubtitle: {
    fontSize: 15,
    marginLeft: 4,
  },
  ratingIcon: {
    marginHorizontal: 5,
    alignSelf: "baseline",
  },
  caretIconText: {
    marginLeft: "auto",
  },
  caretIcon: {
    marginLeft: 2,
    alignSelf: "flex-end",
  },
});
