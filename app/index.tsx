import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
       
        <Link href={"/trauma"} style={styles.espaco}>
          <View style={[styles.cardTrauma, styles.card]}>
            <Image
              style={styles.imagem}
              source={require("../assets/images/trauma.png")}
            />

            <Text style={styles.cardText}>Trauma</Text>
          </View>
        </Link>

        <Link href={"/afoga"} style={styles.espaco}>
          <View style={[styles.cardAfogamento, styles.card]}>
            <Image
              style={styles.imagem}
              source={require("../assets/images/afogamento.png")}
            />

            <Text style={styles.cardText}>Afogamento</Text>
          </View>
        </Link>

        <Link href={"/afoga"} style={styles.espaco}>
          <View style={[styles.cardEscalpelamento, styles.card]}>
            <Image
              style={styles.imagem}
              source={require("../assets/images/escalpelamento.png")}
            />

            <Text style={styles.cardText}>Afogamento</Text>
          </View>
        </Link>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: 310,
    height: 310,
    padding: 5,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardAfogamento: {
    backgroundColor: "lightblue",
  },
  cardTrauma: {
    backgroundColor: "lightcoral",
  },
  cardEscalpelamento: {
    backgroundColor: "lightgreen",
  },
  cardText: {
    marginTop: 10,
    fontSize: 34,
    fontWeight: "normal",
  },
  imagem: {
    width: 120,
    height: 120,
  },
  espaco: {
    marginBottom: 10,
  },
});
