import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../auxiliares/BaseTeorica//estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";

export default function ResistividadeCabo({ isAcordeonOpen, toggleAcordeon }) {

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[5]}
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
            {textos.valoresVariaveis.resistividade[0]}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.resisitividadeCabo} = 0.02857
              ${textos.unidadesMedida.resistividade}`}
          />

          <Text style={estilos.textoResposta}>
            {textos.valoresVariaveis.resistividade[1]}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.resisitividadeCabo} = 0.0172
              ${textos.unidadesMedida.resistividade}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
