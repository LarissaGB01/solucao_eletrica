import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import imagemTabela from "../../../../assets/tabelaTemperatura.png";

export default function FatorTemperatura({
  isAcordeonOpen,
  toggleAcordeon,
  responseData
}) {
  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity onPress={toggleAcordeon}>
        <Text
          style={{
            backgroundColor: "#D25719",
            color: "white",
            padding: 10,
            textAlign: "center"
          }}
        >
          Fator Temperatura = {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.fatorTemperatura}
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={{ backgroundColor: "lightgray", padding: 10 }}>
          <Text style={{ marginBottom: 15 }}>Temperatura Ambiente = {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.temperaturaAmbiente}°C</Text>
          <Text style={{ marginBottom: 15 }}>Isolação = {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.isolacaoCabo}</Text>
          <Image style={{ width: '100%', resizeMode: 'contain' }} source={ imagemTabela } />
          <Text>Fonte: NBR5410</Text>
        </View>
      </Collapsible>
    </View>
  );
}
