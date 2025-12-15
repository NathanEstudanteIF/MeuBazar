import { useTheme } from "@/contexts/ThemeProvider";
import { router } from "expo-router";
import {
  ArrowLeftIcon,
  DotsThreeOutlineVerticalIcon,
  ShareNetworkIcon,
  ShoppingCartIcon,
  WhatsappLogoIcon,
} from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Badge from "../badges/IconNotificationBadge";
import SearchBar from "../bars/SearchBar";

type HeaderProps = {
  scrolled: boolean;
};

export default function ProductHeader({ scrolled }: HeaderProps) {
  const { colors } = useTheme();
  const [cartCount] = useState(1);

  const iconColor = scrolled ? colors.text : "#fff";
  const iconBg = scrolled ? "transparent" : '#00000080';
  const headerBg = scrolled ? colors.background : "transparent";

  return (
    <View style={[styles.header, { backgroundColor: headerBg }]}>
      <TouchableOpacity onPress={() => router.back()}>
        <View style={[styles.headerIcon, { backgroundColor: iconBg }]}>
          <ArrowLeftIcon size={26} color={iconColor} weight="bold" />
        </View>
      </TouchableOpacity>

      {scrolled && <SearchBar />}

      <View style={styles.headerActions}>
        <View style={[styles.headerIcon, { backgroundColor: iconBg }]}>
          <WhatsappLogoIcon size={26} color={iconColor} />
        </View>

        <View style={[styles.headerIcon, { backgroundColor: iconBg }]}>
          <ShareNetworkIcon size={26} color={iconColor} />
        </View>

        <View style={[styles.headerIcon, { backgroundColor: iconBg }]}>
          <Badge count={cartCount} />
          <ShoppingCartIcon size={26} color={iconColor} />
        </View>

        <View style={[styles.headerIcon, { backgroundColor: iconBg }]}>
          <DotsThreeOutlineVerticalIcon size={26} color={iconColor} />
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
    justifyContent: "space-between",
    gap: 8,
  },
  headerIcon: {
    padding: 5,
    borderRadius: 18,
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
});
