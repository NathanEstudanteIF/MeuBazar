import React, { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import CategoryIcon from "../icons/CategoryIcon";

const { width } = Dimensions.get("window");

export type CategoryData = {
  image: any;
  label: string;
};

type Props = {
  categories: CategoryData[];
};

export default function HorizontalScrollCategories({ categories }: Props) {
  const scrollRef = useRef<ScrollView>(null);
  const [position, setPosition] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const contentWidth = e.nativeEvent.contentSize.width - width;

    const progress = contentWidth > 0 ? x / contentWidth : 0;
    setPosition(progress);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}
      >
        {categories.map((cat, index) => (
          <CategoryIcon
            key={index}
            image={cat.image}
            label={cat.label}
          />
        ))}
      </ScrollView>

      <View style={styles.indicatorBackground}>
        <View
          style={[
            styles.indicator,
            { transform: [{ translateX: position * 18 }] },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingTop: 8,
    marginTop: -28,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 16,
    gap: 20,
  },
  indicatorBackground: {
    height: 4,
    width: 30,
    backgroundColor: "#e5e5e5",
    borderRadius: 2,
    overflow: "hidden",
    alignSelf: "center",
    marginVertical: 16,
  },
  indicator: {
    width: 12,
    height: 4,
    backgroundColor: "#ee4c2d",
    borderRadius: 2,
  },
});
