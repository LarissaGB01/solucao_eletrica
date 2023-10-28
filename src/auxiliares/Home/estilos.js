import { Dimensions, StatusBar, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
  // pagina inteira
  telaInteira: {
    flex: 1
  },
  listaOpcoes: {
    flex: 1,
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight
  },

  // componente topo
  topo: {
    backgroundColor: "#F3CCB8",
    padding: 20
  },
  vistaBoasVindas: {
    flexDirection: "row",
    alignItems: "center"
  },
  imagem: {
    width: 90,
    height: 90,
    borderRadius: 35
  },
  nomeLogo: {
    fontSize: 25,
    lineHeight: 40,
    fontWeight: "bold",
    color: "#272727",
    marginHorizontal: 10,
    textAlign: "center"
  },
  boasVindas: {
    fontSize: 20,
    lineHeight: 42,
    fontWeight: "bold",
    color: "#3B3B3B",
    marginHorizontal: 10,
    textAlign: "center"
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#5F5F5F",
    marginTop: 10
  },

  // componente opcoes
  cardOpcao: {
    width: larguraElementos,
    backgroundColor: "#D25719",
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000"
  },
  imagemOpcoes: {
    width: larguraElementos - 2,
    height: larguraElementos - 2,
    borderRadius: 10
  },
  textoOpcoes: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 10
  }
});

export default estilos;
