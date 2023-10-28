import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MathView from "react-native-math-view";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function DadosInformados({ requestData, origemCabeamento, isAcordeonOpen, toggleAcordeon }) {
  return (
    <View style={estilos.espacoCalculos}>
      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.tituloDados}
          </Text>

          {isAcordeonOpen ? (
            <AntDesign name="caretup" size={14} color="white" />
          ) : (
            <AntDesign name="caretdown" size={14} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={!isAcordeonOpen}>
        {origemCabeamento ? (
          <View style={estilos.internoAcordeao}>
            <MathView style={estilos.dados}
              math={`${textos.variaveis.comprimentoCabo} = 
                ${requestData.comprimentoFio} 
                ${textos.unidadesMedida.distancia}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.fatorPotencia} = 
                ${requestData.fatorDePotencia}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.potenciaAparente} = 
                ${requestData.potenciaAparente}
                ${textos.unidadesMedida.potenciaAparente}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.potenciaAtiva} = 
                ${requestData.potenciaAtiva}
                ${textos.unidadesMedida.potenciaAtiva}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.quantidadeCircuitos} = 
                ${requestData.quantidadeCircuitosAgrupados}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.temperatura} = 
                ${requestData.temperaturaAmbiente}
                ${textos.unidadesMedida.temperatura}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.tensao} = 
                ${requestData.voltagem}
                ${textos.unidadesMedida.voltagem}`}
            />

            <Text style={estilos.dados}>
              Sistema {requestData.fasesVoltagem}
            </Text>

            <Text style={estilos.dados}>
              Instalação {requestData.metodoInstalacao}
            </Text>

            <Text style={estilos.dados}>
              Cabo {requestData.tipoCabo}
            </Text>

            <Text style={estilos.dados}>
              Circuito {requestData.tipoCircuito}
            </Text>

            <Text style={estilos.dados}>
              Finalidade {requestData.utilizacaoCircuito}
            </Text>
          </View>
        ) : (
          <View style={estilos.internoAcordeao}>
            <MathView style={estilos.dados}
              math={`${textos.variaveis.correnteProjeto} = 
                ${requestData.correnteProjeto} 
                ${textos.unidadesMedida.corrente}`}
            />

            <MathView style={estilos.dados}
              math={`${textos.variaveis.correnteMaxima} = 
                ${requestData.correnteMaximaCabo}
                ${textos.unidadesMedida.corrente}`}
            />

            <Text style={estilos.dados}>
              Sistema {requestData.fasesVoltagem}
            </Text>
          </View>
        )}
      </Collapsible>
    </View>
  );
}
