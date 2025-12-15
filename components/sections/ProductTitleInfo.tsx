import { useTheme } from "@/contexts/ThemeProvider";
import { StyleSheet, Text, View } from "react-native";

type TitleProps = {
  title: string;
};

export default function ProductTitleInfo({ title }: TitleProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.icon,
        },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 12,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
