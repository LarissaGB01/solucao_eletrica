import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { AntDesign } from "@expo/vector-icons";

export default function CondutorRecomendado({ responseData, isAcordeonOpen, toggleAcordeon }) {
  
  const dados = responseData.dadosDimensionados.cabeamento;

  return (
    <View style={estilos.espacoCalculos}>
      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.tituloCondutorRecomendado}
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
            math={`${textos.variaveis.secaoNominal} = 
              ${dados.secaoNominalCondutor} 
              ${textos.unidadesMedida.secao}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.correnteMaxima} = 
              ${dados.correnteMaximaCondutor} 
              ${textos.unidadesMedida.corrente}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
