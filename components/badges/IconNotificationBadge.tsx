import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  count: number;
};


export default function Badge({ count } : BadgeProps) {

  return (
      <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -7,
    right: -7,
    backgroundColor: "#ee4c2d",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
});
