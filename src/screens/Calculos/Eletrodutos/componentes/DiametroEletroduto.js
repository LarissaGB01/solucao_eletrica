import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MathView from "react-native-math-view";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function DiametroEletroduto({ resposta, origemCabeamento, isAcordeonOpen, toggleAcordeon }) {

  const dados = origemCabeamento ? resposta.dadosUtilizadosParaCalculo.calculoEletroduto : resposta.dadosUtilizadosParaCalculo;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[13]}
            {dados.diametroMinimoCalculado.toFixed(2)}
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
            math={`${textos.variaveis.diametroEletroduto} \\geq \\frac{100 \\cdot 
              ${textos.variaveis.diametroCondutor} \\cdot
              ${textos.variaveis.quantidadeCircuitos}}{40}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.diametroEletroduto} \\geq \\frac{100 \\cdot 
              ${dados.diametroCabo} \\cdot
              ${dados.quantidadeCondutores}}{40}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.diametroEletroduto} \\geq 
              ${dados.diametroMinimoCalculado}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
