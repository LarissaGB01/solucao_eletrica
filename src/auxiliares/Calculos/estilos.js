import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
  // geral
  telaInteira: { 
    margin: 20 
  },

  // dados informados
  tituloDados: { 
    marginBottom: 20, 
    fontWeight: "bold", 
    alignSelf: "center" 
  },
  dados: { 
    marginBottom: 15 
  }, 
  espacoCalculos: {
    marginVertical:10
  }, 

  // acordeao
  viewBotao: {
    backgroundColor: "#D25719", 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
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

  // equacoes
  equacoes: { 
    marginVertical: 15 
  }, 
  viewEquacaoPrincipal: { 
    flex: 1, 
    padding: 10, 
    alignItems: 'center',
    marginTop: 30
  },

  // tabelas
  imagemTabela: { 
    width: '100%', 
    resizeMode: 'contain' 
  }, 

  // resposta
  cardResposta: {
    backgroundColor: "#D25719",
    padding: 0,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000"
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
  textoResposta: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 10
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
});

export default estilos;
