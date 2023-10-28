import React from "react";
import { View } from "react-native";
import MathView from "react-native-math-view";

import textos from "../../../../auxiliares/Calculos/textos";
import estilos from "../../../../auxiliares/Calculos/estilos";

export default function EquacaoPrincipal({ resposta, origemCabeamento }) {

  const calculado = origemCabeamento ? resposta.dadosUtilizadosParaCalculo.calculoDisjuntor : resposta.dadosUtilizadosParaCalculo;

  return (
    <View style={estilos.viewEquacaoPrincipal}>
      <MathView style={estilos.dados}
        math={`${textos.variaveis.correnteProjeto} \\leq
          ${textos.variaveis.correnteNominal} \\leq
          ${textos.variaveis.correnteMaxima}`}
      />
      
      <MathView style={estilos.dados}
        math={`${calculado.correnteProjeto} \\leq
          ${textos.variaveis.correnteNominal} \\leq
          ${calculado.correnteMaximaCabo}`}
      />
    </View>
  );
}
