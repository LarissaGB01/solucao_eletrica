import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
  // pagina inteira
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  telaInteira: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },

  // titulos
  textoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 1
  },

  // respostas
  cardResposta: {
    backgroundColor: "#D25719",
    padding: 0,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    width: width - 60 
  },
  viewCardResposta: { 
    flexDirection: "row", 
    backgroundColor: "#fff", 
    borderRadius: 10 
  },
  imagemResposta: {
    width: larguraElementos - 10,
    height: larguraElementos - 10,
    borderRadius: 5
  },
  viewTextoResposta: { 
    flex: 1, 
    padding: 10, 
    alignItems: 'center' 
  },
  textoRespostaDescricao: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginTop: 10
  },
  textoRespostaFinal: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 10
  },
  textoResposta: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 10
  },

  // botao
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
