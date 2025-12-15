import { useTheme } from "@/contexts/ThemeProvider";
import { Rating } from "@/types/models/product";
import { CaretRightIcon, StarIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

type RatingProps = {
  rating?: Rating;
};

export default function ProductRating({ rating }: RatingProps) {
  const { colors } = useTheme();

  if (!rating) return null;

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
      <Text style={[styles.ratingNumber, { color: colors.text }]}>
        {rating.rate.toFixed(1)}
      </Text>

      <View style={styles.ratingIcon}>
        <StarIcon size={20} weight="fill" color="#FFC317" />
      </View>

      <Text style={[styles.ratingSubtitle, { color: colors.text }]}>
        Avaliações do produto ({rating.count})
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
