import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, Alert, TouchableOpacity } from "react-native";
import apiConfig from "../../config/apiConfig";
import estilos from "../../auxiliares/Dimensionamento/estilos";
import textos from "../../auxiliares/Dimensionamento/textos";
import { AntDesign } from "@expo/vector-icons";

export default function Dimensionamento({ route, navigation }) {

  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(true);

  // TODO: esses dados deveriam vir da página FormCabeamento
  // const { requestData } = route.params.requisicao;
  const requisicao = {
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
    };

    fetchData();
  }, []);

  let conteudoPagina;

  if (loading) {
    conteudoPagina = <ActivityIndicator size="large" color="#D25719" />;
  } else if (resposta) {
    conteudoPagina = (
      <ScrollView>
        <Text>{JSON.stringify(resposta.dadosDimensionados, null, 2)}</Text>

        <TouchableOpacity style={estilos.botao} onPress={() =>
            navigation.navigate("Condutores", {
              requisicao1: requisicao,
              resposta1: resposta})}
        >
          <View style={estilos.viewBotao}>
            <Text style={estilos.textobotao}> {textos.botoesCalculos[0]} </Text>
            <AntDesign name="doubleright" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={() =>
            navigation.navigate("Disjuntores", {
              requisicao1: requisicao,
              resposta1: resposta})}
        >
          <View style={estilos.viewBotao}>
            <Text style={estilos.textobotao}> {textos.botoesCalculos[1]} </Text>
            <AntDesign name="doubleright" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={() =>
            navigation.navigate("Eletrodutos", {
              requisicao1: requisicao,
              resposta1: resposta})}
        >
          <View style={estilos.viewBotao}>
            <Text style={estilos.textobotao}> {textos.botoesCalculos[2]} </Text>
            <AntDesign name="doubleright" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );

  } else {
    Alert.alert(textos.erro);
    navigation.goBack();
  }

  return <View style={estilos.telaInteira}>{conteudoPagina}</View>;
}
