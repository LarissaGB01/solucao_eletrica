import { Dimensions, StatusBar, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const larguraElementos = (width - 40) / 2;

const estilos = StyleSheet.create({
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
  campoNumerico: {
    color: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center'
  },
  entradaTexto: {
    marginHorizontal:50, 
    textAlign:'center', 
    fontSize: 16
  },
  resposta: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center'
  },
  espacoPreenchimento: {
    alignSelf:'center'
  },
  linhaPreenchimento: { 
    borderBottomWidth: 1, 
    borderBottomColor: 'black', 
    width: '80%', 
    alignSelf: 'center' 
  },
});

export default estilos;
