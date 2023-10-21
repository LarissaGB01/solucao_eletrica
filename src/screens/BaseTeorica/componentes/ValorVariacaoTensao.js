import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../auxiliares/BaseTeorica/estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

export default function ValorVariacaoTensao({ isAcordeonOpen, toggleAcordeon }) {

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[6]}
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
            {textos.valoresVariaveis.variacaoTensao[0]}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.variacaoTensao} = 2
              \\${textos.unidadesMedida.percentual}`}
          />

          <Text style={estilos.textoResposta}>
            {textos.valoresVariaveis.variacaoTensao[1]}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.variacaoTensao} = 4
              \\${textos.unidadesMedida.percentual}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
