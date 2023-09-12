import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

class Dimensionamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resposta: null,
      error: null,
    };
  }

  componentDidMount() {
    // Dados da requisição
    const requestData = {
      tipoCircuito: "DISTRIBUICAO",
      utilizacaoCircuito: "TOMADA",
      fasesVoltagem: "TRIFASICO",
      voltagem: 380,
      metodoInstalacao: "A1",
      tipoCabo: "ALUMINIO",
      potenciaAtiva: 12000,
      potenciaAparente: 0,
      fatorDePotencia: 0.8,
      temperaturaAmbiente: 50,
      quantidadeCircuitosAgrupados: 2,
      comprimentoFio: 60
    };

    // Fazer a solicitação POST
    axios.post('http://10.0.0.138:8080/dimensionar', requestData)
      .then(response => {
        // Manipular a resposta da API
        const responseData = response.data;
        this.setState({ resposta: responseData });
      })
      .catch(error => {
        // Manipular os erros da API
        this.setState({ error: error.message });
      });
  }

  render() {
    const { resposta, error } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {resposta ? (
          <View>
            <Text>Resposta da Operação:</Text>
            <Text>{JSON.stringify(resposta, null, 2)}</Text>
          </View>
        ) : (
          <Text>Carregando...</Text>
        )}

        {error && (
          <Text style={{ color: 'red' }}>Erro: {error}</Text>
        )}

        <Button
          title="Tentar Novamente"
          onPress={() => {
            // Chame novamente a operação aqui
            this.componentDidMount();
          }}
        />
      </View>
    );
  }
}

export default Dimensionamento;