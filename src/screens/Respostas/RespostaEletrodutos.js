import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView, Alert } from "react-native";

import estilos from "../../auxiliares/Respostas/estilos";
import textos from "../../auxiliares/Respostas/textos";
import apiConfig from "../../config/apiConfig";

// componentes
import EletrodutoSugerido from "./componentes/EletrodutoSugerido";

export default function RespostaEletrodutos({ route, navigation }) {

  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(true);

  const requisicao = { 
    secaoNominalCabo: parseFloat(route.params.secaoNominalCabo.toString().replace(',', '.')),
    quantidadeCondutores: parseInt(route.params.quantidadeCondutores),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConfig.post("/dimensionar/eletrodutos", requisicao);
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
        <EletrodutoSugerido resposta={resposta} requisicao={requisicao} origemCabeamento={false}/>
      </ScrollView>
    );

  } else {
    Alert.alert(textos.erro);
    navigation.goBack();
  }

  return <View style={estilos.telaInteira}>{conteudoPagina}</View>;
}
