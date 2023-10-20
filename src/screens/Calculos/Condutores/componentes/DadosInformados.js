import React from "react";
import { Text, View } from "react-native";
import MathView from "react-native-math-view";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function DadosInformados({ requestData }) {
  return (
    <View>
      <Text style={estilos.tituloDados}> 
        {textos.tituloDados} 
      </Text>
      
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
  );
}
