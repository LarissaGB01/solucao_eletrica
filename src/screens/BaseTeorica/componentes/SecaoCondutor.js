import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../auxiliares/BaseTeorica/estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";

export default function SecaoCondutor({ isAcordeonOpen, toggleAcordeon }) {

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[7]}
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
          <Text style={estilos.textoResposta}>
            {textos.valoresVariaveis.tensao[0]}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.secaoCondutor} = \\frac{100 \\cdot \\sqrt{3} \\cdot 
              ${textos.variaveis.resisitividadeCabo} \\cdot
              ${textos.variaveis.comprimentoCabo} \\cdot 
              ${textos.variaveis.correnteProjeto}}{
              ${textos.variaveis.variacaoTensao} \\cdot
              ${textos.variaveis.tensao}}`}
          />

          <Text style={estilos.textoResposta}>
            {textos.valoresVariaveis.tensao[1]}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.secaoCondutor} = \\frac{200 \\cdot 
              ${textos.variaveis.resisitividadeCabo} \\cdot
              ${textos.variaveis.comprimentoCabo} \\cdot 
              ${textos.variaveis.correnteProjeto}}{
              ${textos.variaveis.variacaoTensao} \\cdot
              ${textos.variaveis.tensao}}`}
          />
        </View>
        
        <View style={estilos.internoAcordeao}>
          <Text style={estilos.dados}>
            {textos.valoresVariaveis.minimoSecao.inicio} TOMADA 
            {textos.valoresVariaveis.minimoSecao.complemento} 2.5
            {textos.unidadesMedida.secao}
          </Text>
          <Text style={estilos.dados}>
            {textos.valoresVariaveis.minimoSecao.inicio} ILUMINAÇÃO  
            {textos.valoresVariaveis.minimoSecao.complemento} 1.5
            {textos.unidadesMedida.secao}
          </Text>
        </View>
      </Collapsible>
    </View>
  );
}
