import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { AntDesign } from "@expo/vector-icons";

export default function CorrenteProjeto({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[4]}
            {dados.correnteProjeto.toFixed(2)}
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
          
          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.correnteProjeto} = \\frac{
              ${textos.variaveis.correnteCircuito}}{
              ${textos.variaveis.fatorAgrupamento} \\cdot 
              ${textos.variaveis.fatorTemperatura}}`}
          />

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.correnteProjeto} = \\frac{
              ${dados.correnteCircuito}}{
              ${dados.fatorAgrupamento} \\cdot 
              ${dados.fatorTemperatura}}`}
          />

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.correnteProjeto} = 
              ${dados.correnteProjeto}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
