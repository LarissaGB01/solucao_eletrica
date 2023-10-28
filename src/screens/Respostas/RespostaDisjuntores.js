import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView, Alert } from "react-native";

import estilos from "../../auxiliares/Respostas/estilos";
import textos from "../../auxiliares/Respostas/textos";
import apiConfig from "../../config/apiConfig";

// componentes
import DisjuntorSugerido from "./componentes/DisjuntorSugerido";

export default function RespostaDisjuntores({ route, navigation }) {

  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(true);

  const requisicao = { 
    fasesVoltagem: route.params.fasesVoltagem,
    correnteMaximaCabo: parseFloat(route.params.correnteMaximaCabo.toString().replace(',', '.')),
    correnteProjeto: parseFloat(route.params.correnteProjeto.toString().replace(',', '.')),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConfig.post("/dimensionar/disjuntores", requisicao);
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
        <DisjuntorSugerido resposta={resposta} requisicao={requisicao} origemCabeamento={false}/>
      </ScrollView>
    );

  } else {
    Alert.alert(textos.erro);
    navigation.goBack();
  }

  return <View style={estilos.telaInteira}>{conteudoPagina}</View>;
}
