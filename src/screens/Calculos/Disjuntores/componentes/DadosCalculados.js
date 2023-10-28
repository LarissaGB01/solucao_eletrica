import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function DadosCalculados({ responseData, isAcordeonOpen, toggleAcordeon }) {
  
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor;

  return (
    <View style={estilos.espacoCalculos}>
      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.tituloDadosCalculados}
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
            math={`${textos.variaveis.potenciaAparente} = 
              ${dados.calculoPotenciaAparente.potenciaAparente} 
              ${textos.unidadesMedida.potenciaAparente}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.correnteCircuito} = 
              ${dados.calculoCorrenteProjeto.correnteCircuito} 
              ${textos.unidadesMedida.corrente}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.fatorAgrupamento} = 
              ${dados.calculoCorrenteProjeto.fatorAgrupamento}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.fatorTemperatura} = 
              ${dados.calculoCorrenteProjeto.fatorTemperatura}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.correnteProjeto} = 
              ${dados.calculoCorrenteProjeto.correnteProjeto} 
              ${textos.unidadesMedida.corrente}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.resisitividadeCabo} = 
              ${dados.calculoDiametroMinimoCabo.resistividadeCabo} 
              ${textos.unidadesMedida.resistividade}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.variacaoTensao} = 
              ${dados.calculoDiametroMinimoCabo.valorVariacaoTensao} 
              ${textos.unidadesMedida.percentual}`}
          />

          <MathView style={estilos.dados}
            math={`${textos.variaveis.secaoCondutor} = 
              ${dados.calculoDiametroMinimoCabo.diametroCalculado} 
              ${textos.unidadesMedida.secao}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
