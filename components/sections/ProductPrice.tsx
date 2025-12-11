import { LinearGradient } from "expo-linear-gradient";
import { ArrowRightIcon, HeartIcon } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

type ProductPriceProps = {
  price: number;
  discount: number;
  sales: number;
}

export function ProductPrice({ price, discount, sales } : ProductPriceProps) {

    return (
          <LinearGradient 
            colors={["#ffffff", "#fcedea"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.priceColumn}
          >
            <View style={styles.priceRow}>
              <Text style={styles.priceCoin}>R$</Text>
              <Text style={styles.priceNumber}>{price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
              {discount > 0 && (
                  <Text style={styles.oldPrice}>
                      R${(price / (1 - discount)).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Text>
              )}
              {discount > 0 && (
                  <Text style={styles.discount}>{Math.round(discount * 100)}%</Text>
              )}
              <View style={styles.sales}>
                <Text style={styles.salesInfo}>{sales} Vendido(s)</Text>
                <HeartIcon color="#444" size={18} style={styles.salesIcon} />
              </View>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.parcelsText}>Em até 12x R$ {(price / 12).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
              <ArrowRightIcon color="#444" size={16} style={styles.parcelsIcon} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  priceColumn: {
    backgroundColor: "#fff",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  priceRow: { 
    flexDirection: "row", 
    alignItems: "baseline" 
  },
  priceCoin: {
    fontSize: 20,
    color: "#ee4c2d",
  },
  priceNumber: {
    fontSize: 28,
    color: "#ee4c2d",
  },
  oldPrice: {
    marginLeft: 6,
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#999",
  },
  discount: {
    paddingVertical: 6,
    paddingHorizontal: 4,
    bottom: 4,
    marginLeft: 6,
    fontSize: 14,
    color: "#ee4c2d",
    backgroundColor: "#fcedea"
  },
  sales: {
    bottom: 6,
    marginLeft: "auto",
    flexDirection: "row"
  },
  salesInfo: {
    fontSize: 13,
    color: "#444",
  },
  salesIcon: {
    marginLeft: 4
  },
  parcelsText: {
    fontSize: 13,
    color: "#444",
  },
  parcelsIcon: {
    marginLeft: 1,
    alignSelf: "flex-end"
  }
})