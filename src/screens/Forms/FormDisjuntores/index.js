import React, { useState } from "react";
import { ScrollView } from "react-native";
import Stepper from 'react-native-stepper-ui';

import textos from "../../../auxiliares/Forms/textosDisjuntores";
import estilos from "../../../auxiliares/Forms/estilos";

// componentes
import DadosCircuito from "./componentes/DadosCircuito";

export default function FormDisjuntores({ navigation }) {

  const [dadosFormulario, setDadosFormulario] = useState({
    fasesVoltagem: textos.eletrico.fases[2].campo,
    correnteMaximaCabo: 0,
    correnteProjeto: 0
  });

  const atualizarValor = (campo, valor) => {
    setDadosFormulario({
      ...dadosFormulario,
      [campo]: valor,
    });
  };

  const conteudo = [
    <DadosCircuito key='DadosCircuito' dadosFormulario={dadosFormulario} atualizarValor={atualizarValor}/>,
  ];  

  const [active, setActive] = useState(0);

  return (
    <ScrollView style={estilos.telaInteira}>
      <Stepper
        active={active}
        content={conteudo}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => navigation.navigate('RespostaDisjuntores', dadosFormulario )}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={estilos.etapas}
        buttonStyle={estilos.botao}
      />
    </ScrollView>
  );
}
