import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useTheme } from "@/contexts/ThemeProvider";
import SearchBar from "../bars/SearchBar";

type HeaderProps = {
  scrolled: boolean;
};

export default function Header({ scrolled }: HeaderProps) {
  const { colors } = useTheme();

  const [cartCount] = useState(1);
  const [messageCount] = useState(4);

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: scrolled
            ? colors.background
            : "transparent",
        },
      ]}
    >
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  iconContainer: {
    position: "relative",
  },
});
