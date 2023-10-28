import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MathView from "react-native-math-view";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function DiametroCondutor({ resposta, origemCabeamento, isAcordeonOpen, toggleAcordeon }) {

  const dados = origemCabeamento ? resposta.dadosUtilizadosParaCalculo.calculoEletroduto : resposta.dadosUtilizadosParaCalculo;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[12]}
            {dados.diametroCabo.toFixed(2)}
            {textos.unidadesMedida.diametro}
          </Text>

          {isAcordeonOpen ? (
            <AntDesign name="caretup" size={14} color="white" />
          ) : (
            <AntDesign name="caretdown" size={14} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={estilos.internoAcordeao}>
          <MathView style={estilos.dados}
            math={`${textos.variaveis.diametroCondutor} = \\sqrt{\\frac{4 \\cdot 
              ${textos.variaveis.secaoNominal}}{\\pi}}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.diametroCondutor} = \\sqrt{\\frac{4 \\cdot 
              ${dados.secaoNominalCabo}}{\\pi}}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.diametroCondutor} = 
              ${dados.diametroCabo}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
