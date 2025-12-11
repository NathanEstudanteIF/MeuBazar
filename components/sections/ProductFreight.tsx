import { CaretRightIcon, TruckIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";


export default function ProductFreight() {
    
    return (
        <View style={styles.freightBox}>
            <TruckIcon size={20} color="#32a596" style={styles.truckIcon} /> 
            <Text style={styles.freightLabelText}>Frete grátis</Text>
            <Text style={styles.oldPrice}>R$15,69</Text>
            <Text style={styles.freightDesc}>R$0,00 com cupom</Text>
            <CaretRightIcon color="#666" size={18} style={styles.caretIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
  freightBox: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "#fff",
    padding: 12, 
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  freightLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  freightLabelText: {
    marginHorizontal: 8,
    fontSize: 16,
    color: "#32a596",
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
freightDesc: { 
    marginHorizontal: 3,
    fontSize: 16,
    color: "#222" 
  },
});