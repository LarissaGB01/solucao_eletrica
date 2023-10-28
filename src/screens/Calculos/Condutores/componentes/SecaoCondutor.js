import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function SecaoCondutor({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoDiametroMinimoCabo;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          {dados.indicadorMinimoDiametroUtilizado ? (
            <Text style={estilos.textoDestaqueAcordeao}>
              {textos.etapasCalculos[7]}
              {dados.minimoDiametroCabo.toFixed(2)}
              {textos.unidadesMedida.secao}
            </Text>
          ) : (
            <Text style={estilos.textoDestaqueAcordeao}>
              {textos.etapasCalculos[7]}
              {dados.diametroCalculado.toFixed(2)}
              {textos.unidadesMedida.secao}
            </Text>
          )}

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
                math={`${textos.variaveis.secaoCondutor} = \\frac{100 \\cdot \\sqrt{3} \\cdot 
                  ${textos.variaveis.resisitividadeCabo} \\cdot
                  ${textos.variaveis.comprimentoCabo} \\cdot 
                  ${textos.variaveis.correnteProjeto}}{
                  ${textos.variaveis.variacaoTensao} \\cdot
                  ${textos.variaveis.tensao}}`}
              />
              
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.secaoCondutor} = \\frac{100 \\cdot \\sqrt{3} \\cdot 
                  ${dados.resistividadeCabo} \\cdot
                  ${dados.comprimentoFio} \\cdot 
                  ${dados.correnteProjeto}}{
                  ${dados.valorVariacaoTensao} \\cdot
                  ${dados.voltagem}}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.secaoCondutor} = 
                  ${dados.diametroCalculado}`}
              />
            </View>
            
          ) : (
            <View>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.secaoCondutor} = \\frac{200 \\cdot 
                  ${textos.variaveis.resisitividadeCabo} \\cdot
                  ${textos.variaveis.comprimentoCabo} \\cdot 
                  ${textos.variaveis.correnteProjeto}}{
                  ${textos.variaveis.variacaoTensao} \\cdot
                  ${textos.variaveis.tensao}}`}
              />
              
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.secaoCondutor} = \\frac{200 \\cdot 
                  ${dados.resistividadeCabo} \\cdot
                  ${dados.comprimentoFio} \\cdot 
                  ${dados.correnteProjeto}}{
                  ${dados.valorVariacaoTensao} \\cdot
                  ${dados.voltagem}}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.secaoCondutor} = 
                  ${dados.diametroCalculado}`}
              />
            </View>
          )}
        </View>
        
        <View style={estilos.internoAcordeao}>

          <Text style={estilos.dados}>
            {textos.valoresFixos.secaoMinima}
            {dados.utilizacaoCircuito}
            {textos.valoresFixos.secaoMinimaComplemento}
            {dados.minimoDiametroCabo}
            {textos.unidadesMedida.secao}
          </Text>

          <Text style={estilos.dados}>
            {textos.valoresFixos.secaoMinimaConclusao}
          </Text>
          {dados.indicadorMinimoDiametroUtilizado ? (

            <MathView style={estilos.equacoes}
              math={`${textos.variaveis.secaoCondutor} = 
                ${dados.minimoDiametroCabo}`}
            />
            ) : (

            <MathView style={estilos.equacoes}
              math={`${textos.variaveis.secaoCondutor} = 
                ${dados.diametroCalculado}`}
            />
            )}
        </View>
      </Collapsible>
    </View>
  );
}
