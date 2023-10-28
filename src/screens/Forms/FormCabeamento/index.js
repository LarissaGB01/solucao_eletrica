import React, { useState } from "react";
import { ScrollView } from "react-native";
import Stepper from 'react-native-stepper-ui';

import textos from "../../../auxiliares/Forms/textosCabeamento";
import estilos from "../../../auxiliares/Forms/estilos";

// componentes
import DadosCircuito from "./componentes/DadosCircuito";
import DadosMateriais from "./componentes/DadosMateriais";
import DadosEletricos from "./componentes/DadosEletricos";
import DadosInstalacao from "./componentes/DadosInstalacao";

export default function FormCabeamento({ navigation }) {

  const [dadosFormulario, setDadosFormulario] = useState({
    tipoCircuito: textos.finalidade.respostas[0].campo,
    utilizacaoCircuito: textos.utilizacao.respostas[0].campo,
    fasesVoltagem: textos.eletrico.fases[2].campo,
    voltagem: 0,
    potenciaAtiva: 0,
    potenciaAparente: 0,
    fatorDePotencia: 0,
    metodoInstalacao: textos.metodo.respostas[0],
    tipoCabo: textos.tipoCabo.respostas[0],
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

  const conteudo = [
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
        content={conteudo}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => navigation.navigate('RespostaCabeamento', dadosFormulario )}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={estilos.etapas}
        buttonStyle={estilos.botao}
      />
    </ScrollView>
  );
}
