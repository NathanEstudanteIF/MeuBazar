import { CaretRightIcon, StarIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";


export default function ProductRating() {
    
    return (
        <View style={styles.ratingBox}>
            <Text style={styles.ratingNumber}>4.9</Text>
            <Text style={styles.ratingIcon}><StarIcon size={20} weight="fill" color="#FFC317" /></Text>
            <Text style={styles.ratingSubtitle}>Avaliações do produto (257)</Text>
            <Text style={styles.caretIconText}>Ver mais </Text>
            <CaretRightIcon color="#666" size={18} style={styles.caretIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "#fff",
    marginTop: 32,
    padding: 12, 
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  ratingNumber: {
    fontSize: 24,
    color: "#222",
  },
  ratingSubtitle: {
    fontSize: 15,
    color: "#222",
  },
  ratingIcon: {
    marginHorizontal: 5,
    alignSelf: "baseline",
  },
  caretIconText: {
    marginLeft: "auto",
    color: "#666",
  },
  caretIcon: {
    marginLeft: 1,
    alignSelf: "flex-end"
  },
});