import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView, Alert } from "react-native";

import estilos from "../../auxiliares/Respostas/estilos";
import textos from "../../auxiliares/Respostas/textos";
import apiConfig from "../../config/apiConfig";

// componentes
import CondutorSugerido from "./componentes/CondutorSugerido";
import DisjuntorSugerido from "./componentes/DisjuntorSugerido";
import EletrodutoSugerido from "./componentes/EletrodutoSugerido";

export default function RespostaCabeamento({ route, navigation }) {

  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(true);

  const requisicao = { 
    tipoCircuito: route.params.tipoCircuito,
    utilizacaoCircuito: route.params.utilizacaoCircuito,
    fasesVoltagem: route.params.fasesVoltagem,
    voltagem: parseFloat(route.params.voltagem.toString().replace(',', '.')),
    potenciaAtiva: parseFloat(route.params.potenciaAtiva.toString().replace(',', '.')),
    potenciaAparente: parseFloat(route.params.potenciaAparente.toString().replace(',', '.')),
    fatorDePotencia: parseFloat(route.params.fatorDePotencia.toString().replace(',', '.')),
    metodoInstalacao: route.params.metodoInstalacao,
    tipoCabo: route.params.tipoCabo,
    temperaturaAmbiente: parseInt(route.params.temperaturaAmbiente),
    quantidadeCircuitosAgrupados: parseInt(route.params.quantidadeCircuitosAgrupados),
    comprimentoFio: parseInt(route.params.comprimentoFio) 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConfig.post("/dimensionar", requisicao);
        const responseData = response.data;
        setResposta(responseData);

      } catch (error) {

        if (error.response?.data?.mensagem) {
          Alert.alert(error.response.data.mensagem);
          navigation.goBack();
        } else {
          Alert.alert("Erro");
          navigation.goBack();
        }

      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  let conteudoPagina;

  if (loading) {
    conteudoPagina = <ActivityIndicator size="large" color="#D25719" />;
  } else if (resposta) {
    conteudoPagina = (
      <ScrollView style={estilos.scrollView}
        contentContainerStyle={estilos.scrollViewContent}
      >
        <CondutorSugerido resposta={resposta} requisicao={requisicao}/>
        <DisjuntorSugerido resposta={resposta} requisicao={requisicao} origemCabeamento={true}/>
        <EletrodutoSugerido resposta={resposta} requisicao={requisicao} origemCabeamento={true}/>
      </ScrollView>
    );

  } else {
    Alert.alert(textos.erro);
    navigation.goBack();
  }

  return <View style={estilos.telaInteira}>{conteudoPagina}</View>;
}
