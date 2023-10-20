import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

export default function ValorVariacaoTensao({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoDiametroMinimoCabo;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[6]}
            {dados.valorVariacaoTensao.toFixed(2)}
            {textos.unidadesMedida.percentual}
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

          <Text style={estilos.dados}>
            {textos.valoresFixos.variacaoTensao}
            {dados.tipoCircuito}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.variacaoTensao} = 
              ${dados.valorVariacaoTensao}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
