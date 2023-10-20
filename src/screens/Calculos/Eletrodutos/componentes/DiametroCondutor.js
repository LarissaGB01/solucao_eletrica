import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import estilos from "../../../../auxiliares/Calculos/estilos";
import MathView from "react-native-math-view";
import textos from "../../../../auxiliares/Calculos/textos";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";

export default function DiametroCondutor({ resposta, isAcordeonOpen, toggleAcordeon }) {

  const dados = resposta.dadosUtilizadosParaCalculo.calculoEletroduto;

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
