import React, { useState } from "react";
import { ScrollView } from "react-native";

import estilos from "../../../auxiliares/Calculos/estilos";

// componentes
import DadosInformados from "./componentes/DadosInformados";
import CalculoPotenciaAparente from "./componentes/PotenciaAparente";
import CalculoCorrenteCircuito from "./componentes/CorrenteCircuito";
import CalculoCorrenteProjeto from "./componentes/CorrenteProjeto";
import CalculoFatorAgrupamento from "./componentes/FatorAgrupamento";
import CalculoFatorTemperatura from "./componentes/FatorTemperatura";
import CalculoResistividadeCabo from "./componentes/ResistividadeCabo";
import CalculoValorVariacaoTensao from "./componentes/ValorVariacaoTensao";
import CalculoSecaoCondutor from "./componentes/SecaoCondutor";
import CondutorRecomendado from "./componentes/CondutorRecomendado";

export default function Condutores({ route, navigation }) {

  const requisicao = route.params.requisicao;
  const resposta = route.params.resposta;
  
  const [isAcordeonPotenciaAparenteOpen, setIsAcordeonPotenciaAparenteOpen] = useState(false);
  const [isAcordeonCorrenteCircuitoOpen, setIsAcordeonCorrenteCircuitoOpen] = useState(false);
  const [isAcordeonFatorAgrupamentoOpen, setIsAcordeonFatorAgrupamentoOpen] = useState(false);
  const [isAcordeonFatorTemperaturaOpen, setIsAcordeonFatorTemperaturaOpen] = useState(false);
  const [isAcordeonCorrenteProjetoOpen, setIsAcordeonCorrenteProjetoOpen] = useState(false);
  const [isAcordeonResistividadeCaboOpen, setIsAcordeonResistividadeCaboOpen] = useState(false);
  const [isAcordeonValorVariacaoTensaoOpen, setIsAcordeonValorVariacaoTensaoOpen] = useState(false);
  const [isAcordeonSecaoCondutorOpen, setIsAcordeonSecaoCondutorOpen] = useState(false);
  const [isAcordeonCondutorRecomendadoOpen, setIsAcordeonCondutorRecomendadoOpen] = useState(false);

  return (
    <ScrollView style={estilos.telaInteira}>
      <DadosInformados requestData={requisicao} />
      <CalculoPotenciaAparente responseData={resposta} isAcordeonOpen={isAcordeonPotenciaAparenteOpen} toggleAcordeon={() => setIsAcordeonPotenciaAparenteOpen(!isAcordeonPotenciaAparenteOpen)} />
      <CalculoCorrenteCircuito responseData={resposta} isAcordeonOpen={isAcordeonCorrenteCircuitoOpen} toggleAcordeon={() => setIsAcordeonCorrenteCircuitoOpen(!isAcordeonCorrenteCircuitoOpen)} />
      <CalculoFatorAgrupamento responseData={resposta} isAcordeonOpen={isAcordeonFatorAgrupamentoOpen} toggleAcordeon={() => setIsAcordeonFatorAgrupamentoOpen(!isAcordeonFatorAgrupamentoOpen)} />
      <CalculoFatorTemperatura responseData={resposta} isAcordeonOpen={isAcordeonFatorTemperaturaOpen} toggleAcordeon={() => setIsAcordeonFatorTemperaturaOpen(!isAcordeonFatorTemperaturaOpen)} />
      <CalculoCorrenteProjeto responseData={resposta} isAcordeonOpen={isAcordeonCorrenteProjetoOpen} toggleAcordeon={() => setIsAcordeonCorrenteProjetoOpen(!isAcordeonCorrenteProjetoOpen)} />
      <CalculoResistividadeCabo responseData={resposta} isAcordeonOpen={isAcordeonResistividadeCaboOpen} toggleAcordeon={() => setIsAcordeonResistividadeCaboOpen(!isAcordeonResistividadeCaboOpen)} />
      <CalculoValorVariacaoTensao responseData={resposta} isAcordeonOpen={isAcordeonValorVariacaoTensaoOpen} toggleAcordeon={() => setIsAcordeonValorVariacaoTensaoOpen(!isAcordeonValorVariacaoTensaoOpen)} />
      <CalculoSecaoCondutor responseData={resposta} isAcordeonOpen={isAcordeonSecaoCondutorOpen} toggleAcordeon={() => setIsAcordeonSecaoCondutorOpen(!isAcordeonSecaoCondutorOpen)} />
      <CondutorRecomendado responseData={resposta} isAcordeonOpen={isAcordeonCondutorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonCondutorRecomendadoOpen(!isAcordeonCondutorRecomendadoOpen)} />
    </ScrollView>
  );
}
