import React from "react";
import { Text, View } from "react-native";
import MathView from "react-native-math-view";

export default function DadosInformados({ requestData }) {
  return (
    <View>
      <Text
        style={{ marginBottom: 20, fontWeight: "bold", alignSelf: "center" }}
      >
        Dados Informados
      </Text>
      <MathView
        math={`l_{\\text{cabo}} = ${requestData.comprimentoFio} m`}
        style={{ marginBottom: 15 }}
      />
      <MathView
        math={`FP = ${requestData.fatorDePotencia}`}
        style={{ marginBottom: 15 }}
      />
      <MathView
        math={`P_{\\text{aparente}} = ${requestData.potenciaAparente}VA`}
        style={{ marginBottom: 15 }}
      />
      <MathView
        math={`P_{\\text{ativa}} = ${requestData.potenciaAtiva}W`}
        style={{ marginBottom: 15 }}
      />
      <MathView
        math={`Q_{\\text{circuitos}} = ${requestData.quantidadeCircuitosAgrupados}`}
        style={{ marginBottom: 15 }}
      />
      <MathView
        math={`T_{\\text{ambiente}} = ${requestData.temperaturaAmbiente}°C`}
        style={{ marginBottom: 15 }}
      />
      <MathView
        math={`V = ${requestData.voltagem}V`}
        style={{ marginBottom: 15 }}
      />
      <Text style={{ marginBottom: 15 }}>
        Sistema {requestData.fasesVoltagem}
      </Text>
      <Text style={{ marginBottom: 15 }}>
        Instalação {requestData.metodoInstalacao}
      </Text>
      <Text style={{ marginBottom: 15 }}>Cabo {requestData.tipoCabo}</Text>
      <Text style={{ marginBottom: 15 }}>
        Circuito {requestData.tipoCircuito}
      </Text>
      <Text style={{ marginBottom: 15 }}>
        Finalidade {requestData.utilizacaoCircuito}
      </Text>
    </View>
  );
}
