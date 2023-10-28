import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../auxiliares/BaseTeorica/estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";

export default function FatorAgrupamento({ isAcordeonOpen, toggleAcordeon }) {

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[2]}
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
          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.fatorAgrupamento} = \\frac{1}{\\sqrt{
              ${textos.variaveis.quantidadeCircuitos}}}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
