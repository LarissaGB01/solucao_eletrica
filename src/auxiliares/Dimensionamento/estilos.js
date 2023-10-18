import { Dimensions, StatusBar, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
  telaInteira: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  botao: {
    backgroundColor: '#D25719',
    padding: 10,
    borderRadius: 5,
    marginHorizontal:15
  },
  textobotao: {
    color: 'white',
    textAlign: 'center',
  },
});

export default estilos;
