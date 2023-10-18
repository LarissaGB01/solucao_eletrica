import React, { useEffect, useState } from "react";
import {View, Text, ActivityIndicator, ScrollView, Alert, TouchableOpacity} from "react-native";
import apiConfig from "../../config/apiConfig";
import estilos from "../../auxiliares/Dimensionamento/estilos";

export default function Dimensionamento({ route, navigation }) {
  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    const fetchData = async () => {
      try {
        console.log(route.params);
        const response = await apiConfig.post("/dimensionar", requestData);

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
        <Text>{JSON.stringify(resposta, null, 2)}</Text>
        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate("Calculos", { dados: resposta })}
        >
          <Text style={estilos.textobotao}>Ver cálculos</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    conteudoPagina = <Text>Carregando...</Text>;
  }

  return (
    <View style={estilos.telaInteira}>
      {conteudoPagina}
    </View>
  );
}
