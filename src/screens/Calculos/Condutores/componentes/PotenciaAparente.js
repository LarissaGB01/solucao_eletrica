import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { AntDesign } from "@expo/vector-icons";

export default function PotenciaAparente({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoPotenciaAparente;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[0]}
            {dados.potenciaAparente.toFixed(2)}
            {textos.unidadesMedida.potenciaAparente}
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
          {dados.indicadorPotenciaAparenteInformada ? (

            <View>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.potenciaAparente} = 
                  ${dados.potenciaAparente}`}
              />
            </View>
            
          ) : (
            <View>
              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.potenciaAparente} = 
                  ${textos.variaveis.potenciaAtiva} \\cdot 
                  ${textos.variaveis.fatorPotencia}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.potenciaAparente} = 
                  ${dados.potenciaAtiva} \\cdot 
                  ${dados.fatorDePotencia}`}
              />

              <MathView style={estilos.equacoes}
                math={`${textos.variaveis.potenciaAparente} = 
                  ${dados.potenciaAparente}`}
              />
            </View>
          )}
        </View>
      </Collapsible>
    </View>
  );
}
