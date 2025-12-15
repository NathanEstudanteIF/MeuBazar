import { useTheme } from "@/contexts/ThemeProvider";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  images: any[];
};

export default function ProductImageCarousel({ images }: Props) {
  const { colors } = useTheme();
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    setIndex(Math.round(horizontalOffset / width));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((img, i) => (
          <Image
            key={i}
            source={img}
            style={[
              styles.image,
              { backgroundColor: colors.background },
            ]}
            resizeMode="contain"
          />
        ))}
      </ScrollView>

      <View
        style={[
          styles.badge,
          {
            backgroundColor: colors.background,
            borderColor: colors.icon,
          },
        ]}
      >
        <Text style={[styles.badgeText, { color: colors.text }]}>
          {index + 1}/{images.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 413,
  },
  image: {
    width,
    height: 413,
  },
  badge: {
    position: "absolute",
    bottom: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
