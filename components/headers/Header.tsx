import { ChatCircleIcon, ShoppingCartIcon } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Badge from "../badges/IconNotificationBadge";
import SearchBar from "../bars/SearchBar";

type HeaderProps = {
  scrolled: boolean;
};

export default function Header({ scrolled }: HeaderProps) {
  const [cartCount] = useState(1);
  const [messageCount] = useState(4);

  return (
    <View style={[
      styles.header,
      { backgroundColor: scrolled ? "#fff" : "transparent" }
    ]}>
        <SearchBar />

        <View style={styles.headerIcons}>
            <View style={styles.iconContainer}>
              <ShoppingCartIcon size={26} color={ scrolled ? "#333" : "#fff" } weight="regular" />
              {cartCount > 0 && (
                <Badge count={1} />
              )}
            </View>

            <View style={styles.iconContainer}>
              <ChatCircleIcon size={26} color={ scrolled ? "#333" : "#fff" } weight="regular" />
              {messageCount > 0 && (
                <Badge count={3} />
              )}
            </View>
        </View>
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
