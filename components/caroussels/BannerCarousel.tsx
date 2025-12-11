import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type BannerCarouselProps = {
  images: (string | number)[];
};

export default function BannerCarousel({ images }: BannerCarouselProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
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
        {images.map((uri, idx) => (
          <Image
            key={idx}
            source={typeof uri === "string" ? { uri } : uri}
            style={styles.image}
          />
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {images.map((_, idx) => (
          <View
            key={idx}
            style={[styles.dot, currentIndex === idx && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -30,
    position: "relative",
  },
  image: {
    width,
    height: 220,
    resizeMode: "contain",
  },
  dotsContainer: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#eeeff1",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#ee4c2d",
  },
});
