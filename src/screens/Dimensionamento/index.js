import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, ScrollView, Alert } from "react-native";
import apiConfig from "../../config/apiConfig";
import estilos from "../../auxiliares/Dimensionamento/estilos";
import textos from "../../auxiliares/Dimensionamento/textos";
import CondutorSugerido from "./componentes/CondutorSugerido";
import DisjuntorSugerido from "./componentes/DisjuntorSugerido";
import EletrodutoSugerido from "./componentes/EletrodutoSugerido";

import apiMock from "../../auxiliares/apiMock";

export default function Dimensionamento({ route, navigation }) {

  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(true);

  // TODO: esses dados deveriam vir da página FormCabeamento
  // const { requestData } = route.params.requisicao;
  const requisicao = apiMock.requisicao;

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
      <ScrollView contentContainerStyle={estilos.scrollViewContent} // Adicione esta linha
      style={estilos.scrollView}>
        <CondutorSugerido resposta={resposta} requisicao={requisicao}/>
        <DisjuntorSugerido resposta={resposta} requisicao={requisicao}/>
        <EletrodutoSugerido resposta={resposta} requisicao={requisicao}/>
      </ScrollView>
    );

  } else {
    Alert.alert(textos.erro);
    navigation.goBack();
  }

  return <View style={estilos.telaInteira}>{conteudoPagina}</View>;
}
