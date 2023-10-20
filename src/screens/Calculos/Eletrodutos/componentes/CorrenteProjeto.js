import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";

export default function CorrenteProjeto({
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
          Corrente Projeto ={" "}
          {
            responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
              .calculoCorrenteProjeto.correnteProjeto
          }
          A
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={{ backgroundColor: "lightgray", padding: 10 }}>
          <MathView
            math={`I_{\\text{projeto}} = \\frac{I_{\\text{circuito}}}{FA \\cdot FT}`}
            style={{ marginVertical: 15 }}
          />
          <MathView
            math={`I_{\\text{projeto}} = \\frac{${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto.correnteCircuito}}{${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto.fatorAgrupamento} \\cdot ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto.fatorTemperatura}}`}
            style={{ marginVertical: 15 }}
          />
          <MathView
            math={`I_{\\text{projeto}} = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto.correnteProjeto}`}
            style={{ marginVertical: 15 }}
          />
        </View>
      </Collapsible>
    </View>
  );
}
