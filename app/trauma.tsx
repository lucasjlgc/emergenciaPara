import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";

const Trauma = ()=> {
  const handle = () => {
    Alert.alert("Button Pressed!", "You pressed the button.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.secaoSuperior}>
        <Image
          style={styles.iconeSuperior}
          source={require("../assets/images/trauma2.png")}
        />

        <Text style={styles.titleSuperior}>TRAUMA</Text>
      </View>

      <View style={styles.secaoMeio}>
        <Text style={styles.titleMeio}>O que Fazer?</Text>

        <ScrollView style={styles.listaImagens} horizontal={true}>
          <Image
            style={styles.cartaoMeio}
            source={require("../assets/images/carta_explica.png")}
          />
          <Image
            style={styles.cartaoMeio}
            source={require("../assets/images/carta_explica.png")}
          />
          <Image
            style={styles.cartaoMeio}
            source={require("../assets/images/carta_explica.png")}
          />
        </ScrollView>
      </View>

      <View style={styles.secaoInferior}>
        <View style={styles.camadaInferior2}>
          <TouchableOpacity style={styles.botaoInferior} onPress={handle}>
            <Image
              style={styles.iconeInferior}
              source={require("../assets/images/help.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoInferior} onPress={handle}>
            <Image
              style={styles.iconeInferior}
              source={require("../assets/images/video.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    // Secção Superior
    secaoSuperior: {
      flexDirection: "row",
      backgroundColor: "lightpink",
      width: "100%",
      height: 250,
      alignItems: "center",
      justifyContent: "space-around",
      padding: 5,
    },
    iconeSuperior: {
      width: 150,
      height: 150,
    },
    titleSuperior: {
      fontSize: 34,
      fontWeight: "normal",
    },
    // Secção Meio
    secaoMeio: {
      flexDirection: "column",
      backgroundColor: "lightpink",
      width: "100%",
      height: 250,
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    titleMeio: {
      fontSize: 34,
      fontWeight: "normal",
      paddingLeft: 15,
      paddingBottom: 20,
    },
    listaImagens: {
      width: "100%",
      height: 150,
      backgroundColor: "white",
    },
    cartaoMeio: {
      width: 300,
      height: 150,
      borderWidth: 5,
      borderColor: "white",
      padding: 5,
    },
    // Secção Inferior
    secaoInferior: {
      flexDirection: "column",
      backgroundColor: "lightpink",
      width: "100%",
      height: "50%",
      alignItems: "center",
      padding: 5,
    },
    camadaInferior2: {
      flexDirection: "row",
      backgroundColor: "lightpink",
      width: "100%",
      height: 200,
      alignItems: "flex-end",
      justifyContent: "space-around",
    },
    botaoInferior: {
      backgroundColor: "lightpink",
      padding: 10,
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    iconeInferior: {
      width: 80,
      height: 80,
    },
  });
  
  export default Trauma;