import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { AntDesign } from "@expo/vector-icons";

export default function CorrenteCircuito({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[1]}
            {dados.correnteCircuito.toFixed(2)}
            {textos.unidadesMedida.corrente}
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
          {dados.indicadorCircuitoTrifasico ? (
            
            <View>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = \\frac{
                  ${textos.variaveis.potenciaAparente}}{\\sqrt{3} \\cdot 
                  ${textos.variaveis.tensao}}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = \\frac{
                  ${dados.potenciaAparente}}{\\sqrt{3} \\cdot 
                  ${dados.voltagem}}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = 
                  ${dados.correnteCircuito}`}
              />
            </View>
            
          ) : (
            <View>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = \\frac{
                  ${textos.variaveis.potenciaAparente}}{
                  ${textos.variaveis.tensao}}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = \\frac{
                  ${dados.potenciaAparente}}{
                  ${dados.voltagem}}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.correnteCircuito} = 
                  ${dados.correnteCircuito}`}
              />
            </View>
          )}
        </View>
      </Collapsible>
    </View>
  );
}
