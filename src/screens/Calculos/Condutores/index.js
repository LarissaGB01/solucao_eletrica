import React, { useState } from "react";
import { ScrollView } from "react-native";
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
import estilos from "../../../auxiliares/Calculos/estilos";
import apiMock from "../../../auxiliares/apiMock";

export default function Condutores({ requisicao1, resposta1 }) {

  // TODO: esses dados deveriam vir da página Dimensionamento
  // const { requisicao } = route.params.requisicao;
  // const { resposta } = route.params.resposta;
  const requisicao = apiMock.requisicao;
  const resposta = apiMock.resposta;
  
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
      <CalculoPotenciaAparente isAcordeonOpen={isAcordeonPotenciaAparenteOpen} toggleAcordeon={() => setIsAcordeonPotenciaAparenteOpen(!isAcordeonPotenciaAparenteOpen)} responseData={resposta} />
      <CalculoCorrenteCircuito isAcordeonOpen={isAcordeonCorrenteCircuitoOpen} toggleAcordeon={() => setIsAcordeonCorrenteCircuitoOpen(!isAcordeonCorrenteCircuitoOpen)} responseData={resposta} />
      <CalculoFatorAgrupamento isAcordeonOpen={isAcordeonFatorAgrupamentoOpen} toggleAcordeon={() => setIsAcordeonFatorAgrupamentoOpen(!isAcordeonFatorAgrupamentoOpen)} responseData={resposta} />
      <CalculoFatorTemperatura isAcordeonOpen={isAcordeonFatorTemperaturaOpen} toggleAcordeon={() => setIsAcordeonFatorTemperaturaOpen(!isAcordeonFatorTemperaturaOpen)} responseData={resposta} />
      <CalculoCorrenteProjeto isAcordeonOpen={isAcordeonCorrenteProjetoOpen} toggleAcordeon={() => setIsAcordeonCorrenteProjetoOpen(!isAcordeonCorrenteProjetoOpen)} responseData={resposta} />
      <CalculoResistividadeCabo isAcordeonOpen={isAcordeonResistividadeCaboOpen} toggleAcordeon={() => setIsAcordeonResistividadeCaboOpen(!isAcordeonResistividadeCaboOpen)} responseData={resposta} />
      <CalculoValorVariacaoTensao isAcordeonOpen={isAcordeonValorVariacaoTensaoOpen} toggleAcordeon={() => setIsAcordeonValorVariacaoTensaoOpen(!isAcordeonValorVariacaoTensaoOpen)} responseData={resposta} />
      <CalculoSecaoCondutor isAcordeonOpen={isAcordeonSecaoCondutorOpen} toggleAcordeon={() => setIsAcordeonSecaoCondutorOpen(!isAcordeonSecaoCondutorOpen)} responseData={resposta} />
      <CondutorRecomendado isAcordeonOpen={isAcordeonCondutorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonCondutorRecomendadoOpen(!isAcordeonCondutorRecomendadoOpen)} responseData={resposta} />
    </ScrollView>
  );
}
