import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Countdown() {

  return (
    <View style={styles.row}>
      <View style={styles.box}><Text style={styles.text}>{2}</Text></View>
      <Text style={styles.sep}>:</Text>
      <View style={styles.box}><Text style={styles.text}>{56}</Text></View>
      <Text style={styles.sep}>:</Text>
      <View style={styles.box}><Text style={styles.text}>{17}</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  box: {
    backgroundColor: "#000",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 3,
  },
  text: { color: "#fff", fontSize: 13, fontWeight: "bold" },
  sep: { color: "#fff", fontSize: 13, fontWeight: "bold", marginHorizontal: 3 },
});
