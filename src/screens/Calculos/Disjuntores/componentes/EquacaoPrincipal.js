import React from "react";
import { View } from "react-native";
import estilos from "../../../../auxiliares/Calculos/estilos";
import MathView from "react-native-math-view";
import textos from "../../../../auxiliares/Calculos/textos";

export default function EquacaoPrincipal({ resposta }) {

  return (
    <View style={estilos.viewEquacaoPrincipal}>
      <MathView style={estilos.dados}
        math={`${textos.variaveis.correnteProjeto} \\leq
          ${textos.variaveis.correnteNominal} \\leq
          ${textos.variaveis.correnteMaxima}`}
      />
      
      <MathView style={estilos.dados}
        math={`${resposta.dadosUtilizadosParaCalculo.calculoDisjuntor.correnteProjeto} \\leq
          ${textos.variaveis.correnteNominal} \\leq
          ${resposta.dadosUtilizadosParaCalculo.calculoDisjuntor.correnteMaximaCabo}`}
      />
    </View>
  );
}
