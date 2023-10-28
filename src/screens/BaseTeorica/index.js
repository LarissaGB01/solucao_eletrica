import React, { useState } from "react";
import { ScrollView } from "react-native";

import estilos from "../../auxiliares/Calculos/estilos";

// componentes
import CalculoPotenciaAparente from "./componentes/PotenciaAparente";
import CalculoCorrenteCircuito from "./componentes/CorrenteCircuito";
import CalculoCorrenteProjeto from "./componentes/CorrenteProjeto";
import CalculoFatorAgrupamento from "./componentes/FatorAgrupamento";
import CalculoFatorTemperatura from "./componentes/FatorTemperatura";
import CalculoResistividadeCabo from "./componentes/ResistividadeCabo";
import CalculoValorVariacaoTensao from "./componentes/ValorVariacaoTensao";
import CalculoSecaoCondutor from "./componentes/SecaoCondutor";
import CondutorRecomendado from "./componentes/CondutorRecomendado";
import CorrenteDisjuntor from "./componentes/CorrenteDisjuntor";
import DisjuntorRecomendado from "./componentes/DisjuntorRecomendado";
import DiametroCondutor from "./componentes/DiametroCondutor";
import DiametroEletroduto from "./componentes/DiametroEletroduto";
import EletrodutoRecomendado from "./componentes/EletrodutoRecomendado";

export default function BaseTeorica() {

  const [isAcordeonPotenciaAparenteOpen, setIsAcordeonPotenciaAparenteOpen] = useState(false);
  const [isAcordeonCorrenteCircuitoOpen, setIsAcordeonCorrenteCircuitoOpen] = useState(false);
  const [isAcordeonFatorAgrupamentoOpen, setIsAcordeonFatorAgrupamentoOpen] = useState(false);
  const [isAcordeonFatorTemperaturaOpen, setIsAcordeonFatorTemperaturaOpen] = useState(false);
  const [isAcordeonCorrenteProjetoOpen, setIsAcordeonCorrenteProjetoOpen] = useState(false);
  const [isAcordeonResistividadeCaboOpen, setIsAcordeonResistividadeCaboOpen] = useState(false);
  const [isAcordeonValorVariacaoTensaoOpen, setIsAcordeonValorVariacaoTensaoOpen] = useState(false);
  const [isAcordeonSecaoCondutorOpen, setIsAcordeonSecaoCondutorOpen] = useState(false);
  const [isAcordeonCondutorRecomendadoOpen, setIsAcordeonCondutorRecomendadoOpen] = useState(false);
  const [isAcordeonCorrenteDisjuntorOpen, setIsAcordeonCorrenteDisjuntorOpen] = useState(false);
  const [isAcordeonDisjuntorRecomendadoOpen, setIsAcordeonDisjuntorRecomendadoOpen] = useState(false);
  const [isAcordeonDiametroCondutorOpen, setIsAcordeonDiametroCondutorOpen] = useState(false);
  const [isAcordeonDiametroEletrodutoOpen, setIsAcordeonDiametroEletrodutoOpen] = useState(false);
  const [isAcordeonEletrodutoRecomendadoOpen, setIsAcordeonEletrodutoRecomendadoOpen] = useState(false);

  return (
    <ScrollView style={estilos.telaInteira}>
      <CalculoPotenciaAparente isAcordeonOpen={isAcordeonPotenciaAparenteOpen} toggleAcordeon={() => setIsAcordeonPotenciaAparenteOpen(!isAcordeonPotenciaAparenteOpen)}/>
      <CalculoCorrenteCircuito isAcordeonOpen={isAcordeonCorrenteCircuitoOpen} toggleAcordeon={() => setIsAcordeonCorrenteCircuitoOpen(!isAcordeonCorrenteCircuitoOpen)}/>
      <CalculoFatorAgrupamento isAcordeonOpen={isAcordeonFatorAgrupamentoOpen} toggleAcordeon={() => setIsAcordeonFatorAgrupamentoOpen(!isAcordeonFatorAgrupamentoOpen)}/>
      <CalculoFatorTemperatura isAcordeonOpen={isAcordeonFatorTemperaturaOpen} toggleAcordeon={() => setIsAcordeonFatorTemperaturaOpen(!isAcordeonFatorTemperaturaOpen)}/>
      <CalculoCorrenteProjeto isAcordeonOpen={isAcordeonCorrenteProjetoOpen} toggleAcordeon={() => setIsAcordeonCorrenteProjetoOpen(!isAcordeonCorrenteProjetoOpen)}/>
      <CalculoResistividadeCabo isAcordeonOpen={isAcordeonResistividadeCaboOpen} toggleAcordeon={() => setIsAcordeonResistividadeCaboOpen(!isAcordeonResistividadeCaboOpen)}/>
      <CalculoValorVariacaoTensao isAcordeonOpen={isAcordeonValorVariacaoTensaoOpen} toggleAcordeon={() => setIsAcordeonValorVariacaoTensaoOpen(!isAcordeonValorVariacaoTensaoOpen)} />
      <CalculoSecaoCondutor isAcordeonOpen={isAcordeonSecaoCondutorOpen} toggleAcordeon={() => setIsAcordeonSecaoCondutorOpen(!isAcordeonSecaoCondutorOpen)} />
      <CondutorRecomendado isAcordeonOpen={isAcordeonCondutorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonCondutorRecomendadoOpen(!isAcordeonCondutorRecomendadoOpen)}/>
      <CorrenteDisjuntor isAcordeonOpen={isAcordeonCorrenteDisjuntorOpen} toggleAcordeon={() => setIsAcordeonCorrenteDisjuntorOpen(!isAcordeonCorrenteDisjuntorOpen)}/>
      <DisjuntorRecomendado isAcordeonOpen={isAcordeonDisjuntorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonDisjuntorRecomendadoOpen(!isAcordeonDisjuntorRecomendadoOpen)}/>
      <DiametroCondutor isAcordeonOpen={isAcordeonDiametroCondutorOpen} toggleAcordeon={() => setIsAcordeonDiametroCondutorOpen(!isAcordeonDiametroCondutorOpen)}/>
      <DiametroEletroduto isAcordeonOpen={isAcordeonDiametroEletrodutoOpen} toggleAcordeon={() => setIsAcordeonDiametroEletrodutoOpen(!isAcordeonDiametroEletrodutoOpen)}/>
      <EletrodutoRecomendado isAcordeonOpen={isAcordeonEletrodutoRecomendadoOpen} toggleAcordeon={() => setIsAcordeonEletrodutoRecomendadoOpen(!isAcordeonEletrodutoRecomendadoOpen)}/>
    </ScrollView>
  );
}
