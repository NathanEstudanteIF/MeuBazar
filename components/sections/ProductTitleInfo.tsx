import { ProductBadgeType } from "@/types/enums/ProductBadgeType";
import { StyleSheet, Text, View } from "react-native";
import BadgeTypeBadge from "../badges/ProductCardTypeBadge";

type TitleProps = {
  title: string;
  type: ProductBadgeType;
};

export default function ProductTitleInfo({ title, type } : TitleProps) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        <Text style={styles.badge}><BadgeTypeBadge type={type} /></Text>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 12, 
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  badge: {
    bottom: 3,
  },
  title: { 
    fontSize: 16,
    color: "#222"
  },
});
