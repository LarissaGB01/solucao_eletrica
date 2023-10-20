import React, { useState } from "react";
import { ScrollView } from "react-native";
import textos from "../../auxiliares/FormCabeamento/textos";
import Stepper from 'react-native-stepper-ui';
import DadosCircuito from "./componentes/DadosCircuito";
import DadosMateriais from "./componentes/DadosMateriais";
import DadosEletricos from "./componentes/DadosEletricos";
import DadosInstalacao from "./componentes/DadosInstalacao";
import estilos from "../../auxiliares/FormCabeamento/estilos";

export default function FormCabeamento({ navigation }) {

  const [dadosFormulario, setDadosFormulario] = useState({
    tipoCircuito: textos.finalidade.respostas[0].campo,
    utilizacaoCircuito: textos.utilizacao.respostas[0].campo,
    fasesVoltagem: textos.eletrico.fases[0].campo,
    voltagem: 0,
    potenciaAtiva: 0,
    potenciaAparente: 0,
    fatorDePotencia: 0,
    metodoInstalacao: textos.instalacao.metodo.respostas[0],
    tipoCabo: textos.instalacao.tipoCabo.respostas[0],
    temperaturaAmbiente: 0,
    quantidadeCircuitosAgrupados: 0,
    comprimentoFio: 0,
  });

  const atualizarValor = (campo, valor) => {
    setDadosFormulario({
      ...dadosFormulario,
      [campo]: valor,
    });
  };

  const content = [
    <DadosCircuito key='DadosCircuito' dadosFormulario={dadosFormulario} atualizarValor={atualizarValor}/>,
    <DadosEletricos key='DadosEletricos' dadosFormulario={dadosFormulario} atualizarValor={atualizarValor}/>,
    <DadosInstalacao key='DadosInstalacao' dadosFormulario={dadosFormulario} atualizarValor={atualizarValor}/>,
    <DadosMateriais key='DadosMateriais' dadosFormulario={dadosFormulario} atualizarValor={atualizarValor}/>,
  ];  

  const [active, setActive] = useState(0);

  return (
    <ScrollView style={estilos.telaInteira}>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => navigation.navigate('DadosDimencionamento', { requisicao: dadosFormulario })}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={estilos.etapas}
        buttonStyle={estilos.botao}
      />
    </ScrollView>
  );
}
