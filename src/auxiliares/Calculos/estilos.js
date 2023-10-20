import { Dimensions, StatusBar, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
  telaInteira: { 
    margin: 20 
  },
  tituloDados: { 
    marginBottom: 20, 
    fontWeight: "bold", 
    alignSelf: "center" 
  },
  dados: { 
    marginBottom: 15 
  }, 
  equacoes: { 
    marginVertical: 15 
  }, 
  espacoCalculos: {
    marginVertical:10
  }, 
  textoDestaqueAcordeao: { 
    backgroundColor: "#D25719", 
    color: "white", 
    padding: 10, 
    textAlign:'center' 
  }, 
  internoAcordeao: { 
    backgroundColor: "lightgray", 
    padding: 10 
  }, 
  imagemTabela: { 
    width: '100%', 
    resizeMode: 'contain' 
  }, 
  cardOpcao: {
    backgroundColor: "#D25719",
    padding: 0,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000"
  },
  imagemOpcoes: {
    width: larguraElementos - 10,
    height: larguraElementos - 10,
    borderRadius: 5
  },
  textoOpcoes: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 10
  },
  viewBotao: {
    backgroundColor: "#D25719", 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
});

export default estilos;
