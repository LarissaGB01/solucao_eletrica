import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  // principal
  telaInteira: {
    marginVertical: 30, 
    marginHorizontal: 20,
    flex: 1
  },
  etapas: {
    backgroundColor: '#D25719',
    marginVertical: 5,
    marginBottom: 30,
    marginHorizontal: 5
  },
  botao: {
    padding: 10, 
    borderRadius: 4, 
    alignSelf: 'flex-start', 
    marginRight: 10, 
    backgroundColor: '#D25719',
    marginTop: 30
  },

  // enunciados
  enunciado: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  enunciadoComposto: { 
    flexDirection: "row", 
    alignSelf: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },

  // respostas
  campoNumerico: {
    color: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center'
  },
  entradaTexto: {
    marginHorizontal: 30, 
    textAlign:'center', 
    fontSize: 16,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: 100,
  },
  resposta: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center'
  },
  espacoPreenchimento: {
    alignSelf:'center'
  },
});

export default estilos;
