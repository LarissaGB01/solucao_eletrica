import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import estilos from "../../../auxiliares/BaseTeorica/estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";
import { AntDesign } from "@expo/vector-icons";

export default function CorrenteCircuito({ isAcordeonOpen, toggleAcordeon }) {

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[1]}
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
            <View>
              <Text style={estilos.textoResposta}>{textos.valoresVariaveis.tensao[0]}</Text>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = \\frac{
                  ${textos.variaveis.potenciaAparente}}{\\sqrt{3} \\cdot 
                  ${textos.variaveis.tensao}}`}
              />
            </View>
            <View>
              <Text style={estilos.textoResposta}>{textos.valoresVariaveis.tensao[1]}</Text>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = \\frac{
                  ${textos.variaveis.potenciaAparente}}{
                  ${textos.variaveis.tensao}}`}
              />
            </View>
        </View>
      </Collapsible>
    </View>
  );
}
