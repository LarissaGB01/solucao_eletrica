import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  // tela 
  telaInteira: { 
    margin: 20 
  },
  espacoCalculos: {
    marginVertical:10
  }, 

  // acordeao externo
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

  // acordeao interno
  internoAcordeao: { 
    backgroundColor: "lightgray", 
    padding: 10 
  }, 

  // tabelas
  imagemTabela: { 
    width: '100%', 
    resizeMode: 'contain' 
  }, 
  botao: {
    backgroundColor: '#F3CCB8',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal:15,
    marginVertical:10
  },
  linkExterno: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nomeFonte: { 
    alignSelf: 'center', 
    fontWeight: 'bold',
    marginRight: 5
  },

  // equacoes
  textoResposta: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 10
  },
  equacoes: { 
    marginVertical: 15 
  }, 
});

export default estilos;
