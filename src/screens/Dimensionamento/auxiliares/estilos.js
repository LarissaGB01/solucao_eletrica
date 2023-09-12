import { Dimensions, StatusBar, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
  telaInteira: {
    flex: 1
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#000000",
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: "justify"
  },
});

export default estilos;
