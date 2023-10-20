import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";

export default function PotenciaAparente({ isAcordeonOpen, toggleAcordeon, responseData }) {
  return (
    <View style={{marginVertical:10}}>
      <TouchableOpacity onPress={toggleAcordeon}>
        <Text
          style={{ backgroundColor: "#D25719", color: "white", padding: 10, textAlign:'center' }}
        >
          Potência Aparente = {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoPotenciaAparente.potenciaAparente}W
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={{ backgroundColor: "lightgray", padding: 10 }}>
          {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
            .calculoPotenciaAparente.indicadorPotenciaAparenteInformada ? (
            <View>
              <MathView
                math={`P_{\\text{aparente}} = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoPotenciaAparente.potenciaAparente}`}
                style={{ marginVertical: 15 }}
              />
            </View>
          ) : (
            <View>
              <MathView
                math={`P_{\\text{aparente}} = P_{\\text{ativa}} \\cdot FP`}
                style={{ marginVertical: 15 }}
              />
              <MathView
                math={`P_{\\text{aparente}} = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoPotenciaAparente.potenciaAtiva} \\cdot ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoPotenciaAparente.fatorDePotencia}`}
                style={{ marginVertical: 15 }}
              />
              <MathView
                math={`P_{\\text{aparente}} = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoPotenciaAparente.potenciaAparente}`}
                style={{ marginVertical: 15 }}
              />
            </View>
          )}
        </View>
      </Collapsible>
    </View>
  );
}
