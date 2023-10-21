import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import estilos from "../../../auxiliares/BaseTeorica/estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";
import { AntDesign } from "@expo/vector-icons";

export default function CorrenteDisjuntor({ isAcordeonOpen, toggleAcordeon }) {

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[9]}
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
            math={`${textos.variaveis.correnteProjeto} \\leq
              ${textos.variaveis.correnteNominal} \\leq
              ${textos.variaveis.correnteMaxima}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
