import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";

export default function FatorAgrupamento({
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
          Fator Agrupamento = {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.fatorAgrupamento}
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={{ backgroundColor: "lightgray", padding: 10 }}>
          <MathView
            math={`FA = \\frac{1}{\\sqrt{Q_{\\text{circuitos}}}}`}
            style={{ marginVertical: 15 }}
          />
          <MathView
            math={`FA = \\frac{1}{\\sqrt{${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.quantidadeCircuitosAgrupados}}}`}
            style={{ marginVertical: 15 }}
          />
          <MathView
            math={`FA = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.fatorAgrupamento}`}
            style={{ marginVertical: 15 }}
          />
        </View>
      </Collapsible>
    </View>
  );
}
