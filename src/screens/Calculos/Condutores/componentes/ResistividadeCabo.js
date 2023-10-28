import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function ResistividadeCabo({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoDiametroMinimoCabo;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[5]}
            {dados.resistividadeCabo.toFixed(2)}
            {textos.unidadesMedida.resistividade}
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

          <Text style={estilos.dados}>{textos.valoresFixos.resistividade}
            {dados.tipoCabo}
          </Text>

          <MathView style={estilos.equacoes}
            math={`${textos.variaveis.resisitividadeCabo} = 
              ${dados.resistividadeCabo}`}
          />
        </View>
      </Collapsible>
    </View>
  );
}
