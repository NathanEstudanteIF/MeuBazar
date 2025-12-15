import { useTheme } from "@/contexts/ThemeProvider";
import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  count: number;
};

export default function Badge({ count }: BadgeProps) {
  const { colors } = useTheme();

  if (count <= 0) return null;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: colors.tint,
          borderColor: colors.background,
        },
      ]}
    >
      <Text style={[styles.badgeText, { color: '#fff' }]}>
        {count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -7,
    right: -7,
    borderRadius: 10,
    borderWidth: 1,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
  },
});
