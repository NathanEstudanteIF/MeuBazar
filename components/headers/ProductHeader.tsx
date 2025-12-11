import { router } from "expo-router";
import { ArrowLeftIcon, DotsThreeOutlineVerticalIcon, ShareNetworkIcon, ShoppingCartIcon, WhatsappLogoIcon } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Badge from "../badges/IconNotificationBadge";
import SearchBar from "../bars/SearchBar";

type HeaderProps = {
  scrolled: boolean;
};

export default function ProductHeader({ scrolled }: HeaderProps) {
  const [cartCount] = useState(1);
  const [messageCount] = useState(4);

  return (
    <View style={[
      styles.header,
      { backgroundColor: scrolled ? "#fff" : "transparent" }
    ]}>
        <TouchableOpacity onPress={() => router.back()}>
            <View style={[styles.headerIcon, { backgroundColor: scrolled ? "transparent" : "#00000060" } ]}>
                <ArrowLeftIcon size={26} color={scrolled ? "#ee4c2d" : "#fff"} weight="bold" />
            </View>
        </TouchableOpacity>

        {
            scrolled && <SearchBar />
        }

        <View style={styles.headerActions}>
            <View style={[styles.headerIcon, { position: "relative", backgroundColor: scrolled ? "transparent" : "#00000060" } ]}>
                <WhatsappLogoIcon size={26} color={scrolled ? "#ee4c2d" : "#fff"} />
            </View>
            <View style={[styles.headerIcon, { backgroundColor: scrolled ? "transparent" : "#00000060" } ]}>
              <ShareNetworkIcon size={26} color={scrolled ? "#ee4c2d" : "#fff"} />
            </View>
            <View style={[styles.headerIcon, { backgroundColor: scrolled ? "transparent" : "#00000060" } ]}>
              <Badge count={1} />
              <ShoppingCartIcon size={26} color={scrolled ? "#ee4c2d" : "#fff"} />
            </View>
            <View style={[styles.headerIcon, { backgroundColor: scrolled ? "transparent" : "#00000060" } ]}>
              <DotsThreeOutlineVerticalIcon size={26} color={scrolled ? "#ee4c2d" : "#fff"} />
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
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
  headerIcon: {
    padding: 5,
    borderRadius: 18,
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
  iconContainer: {
    position: "relative",
  },
});
