import React, { useState } from "react";
import { ScrollView } from "react-native";
import Stepper from 'react-native-stepper-ui';

import estilos from "../../../auxiliares/Forms/estilos";

// componentes
import DadosCircuito from "./componentes/DadosCircuito";

export default function FormEletrodutos({ navigation }) {

  const [dadosFormulario, setDadosFormulario] = useState({
    secaoNominalCabo: 0,
    quantidadeCondutores: 0
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
        onFinish={() => navigation.navigate('RespostaEletrodutos', dadosFormulario )}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={estilos.etapas}
        buttonStyle={estilos.botao}
      />
    </ScrollView>
  );
}
