import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";

export default function CorrenteCircuito({ isAcordeonOpen, toggleAcordeon, responseData }) {
  return (
    <View style={{marginVertical:10}}>
      <TouchableOpacity onPress={toggleAcordeon}>
        <Text
          style={{ backgroundColor: "#D25719", color: "white", padding: 10, textAlign:'center' }}
        >
          Corrente Circuito = {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                  .calculoCorrenteProjeto.correnteCircuito}A
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={{ backgroundColor: "lightgray", padding: 10 }}>
          {responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
            .calculoCorrenteProjeto.indicadorCircuitoTrifasico ? (
            <View>
              <MathView
                math={`I_{\\text{circuito}} = \\frac{P_{\\text{aparente}}}{\\sqrt{3} \\cdot V}`}
                style={{ marginVertical: 15 }}
              />
              <MathView
                math={`I_{\\text{circuito}} = \\frac{${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                  .calculoCorrenteProjeto.potenciaAparente}}{\\sqrt{3} \\cdot ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                    .calculoCorrenteProjeto.voltagem}}`}
                style={{ marginVertical: 15 }}
              />
              <MathView
                math={`I_{\\text{circuito}} = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                  .calculoCorrenteProjeto.correnteCircuito}`}
                style={{ marginVertical: 15 }}
              />
            </View>
          ) : (
            <View>
              <MathView
                math={`I_{\\text{circuito}} = \\frac{P_{\\text{aparente}}}{V}`}
                style={{ marginVertical: 15 }}
              />
              <MathView
                math={`I_{\\text{circuito}} = \\frac{${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                  .calculoCorrenteProjeto.potenciaAparente}}{${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                    .calculoCorrenteProjeto.voltagem}}`}
                style={{ marginVertical: 15 }}
              />
              <MathView
                math={`I_{\\text{circuito}} = ${responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor
                  .calculoCorrenteProjeto.correnteCircuito}`}
                style={{ marginVertical: 15 }}
              />
            </View>
          )}
        </View>
      </Collapsible>
    </View>
  );
}
