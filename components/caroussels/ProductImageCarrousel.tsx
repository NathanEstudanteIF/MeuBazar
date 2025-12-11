import { ProductShippingType } from "@/types/enums/ProductShippingType";
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
import ProductDetailsShippingBadge from "../badges/ProductDetailsShippingBadge";

const { width } = Dimensions.get("window");

type Props = {
    type: ProductShippingType,
    images: any[];
};

export default function ProductImageCarousel({ type, images }: Props) {
    const scrollRef = useRef<ScrollView>(null);
    const [index, setIndex] = useState(0);

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(horizontalOffset / width);
        setIndex(currentIndex);
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
                    <Image key={i} source={img} style={styles.image} />
                ))}
            </ScrollView>

            <ProductDetailsShippingBadge type={type} />

            <View style={styles.badge}>
                <Text style={styles.badgeText}>
                    {index + 1}/{images.length}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 420,
    },
    image: {
        width,
        height: 420,
        resizeMode: "cover",
        backgroundColor: "#f5f5f5",
    },
    badge: {
        position: "absolute",
        bottom: 12,
        right: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    badgeText: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 12,
        fontWeight: "600",
    },
});
