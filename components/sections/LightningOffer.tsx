import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import Countdown from "../misc/Countdown";

export function LightningOffer () {

    return (
        <LinearGradient
            colors={["#8263ae", "#8263ae", "#fe7237"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.lightningOffers}
        >
            <Image
                style={styles.lightningOffersImage}
                source={require("../../assets/images/lightningOffers.png")}
            />

            <Text style={styles.countdownContainerText}>TERMINA EM</Text>

            <View style={styles.countdownContainer}>
                <Countdown />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  lightningOffers: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 4,
  },
  lightningOffersImage: {
    marginLeft: 8,
  },
  countdownContainerText: {
    color: "#fff",
    fontSize: 15,
    marginTop: 8,
    marginLeft: 32,
    marginRight: 8,
    fontWeight: 'bold',
    verticalAlign: "middle",
  },
  countdownContainer: {
    flex: 1,
    marginBottom: 4,
    alignItems: "flex-end",
    flexDirection: "row",
  },
})