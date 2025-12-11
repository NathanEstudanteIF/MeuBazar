import { CaretRightIcon, CreditCardIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";


export default function ProductParcels() {
    
    return (
        <View style={styles.parcelsBox}>
            <CreditCardIcon size={20} color="#ee4c2d" style={styles.truckIcon} /> 
            <Text style={styles.parcelsLabelText}>SParcelado:</Text>
            <Text style={styles.parcelsDesc}>Parcele em até 12x</Text>
            <CaretRightIcon color="#666" size={18} style={styles.caretIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
  parcelsBox: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "#fff",
    padding: 12, 
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  parcelsLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  parcelsLabelText: {
    marginHorizontal: 8,
    fontSize: 16,
    color: "#ee4c2d",
  },
  truckIcon: {
    marginLeft: 1,
    alignSelf: "flex-end"
  },
  caretIcon: {
    marginLeft: "auto",
  },
  oldPrice: {
    marginHorizontal: 3,
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#999",
  },
parcelsDesc: { 
    marginHorizontal: 3,
    fontSize: 16,
    color: "#222" 
  },
});