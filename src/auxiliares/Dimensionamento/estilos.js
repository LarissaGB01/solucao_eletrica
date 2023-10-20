import { StyleSheet } from "react-native";

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
    marginHorizontal:15,
    marginVertical:5
  },
  viewBotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textobotao: {
    color: "white",
    textAlign: "center",
    flex: 1
  },
});

export default estilos;
