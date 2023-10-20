import React, { useState } from "react";
import { ScrollView } from "react-native";
import DadosInformados from "../Condutores/componentes/DadosInformados";
import CalculoPotenciaAparente from "../Condutores/componentes/PotenciaAparente";
import CalculoCorrenteCircuito from "../Condutores/componentes/CorrenteCircuito";
import CalculoCorrenteProjeto from "../Condutores/componentes/CorrenteProjeto";
import CalculoFatorAgrupamento from "../Condutores/componentes/FatorAgrupamento";
import CalculoFatorTemperatura from "../Condutores/componentes/FatorTemperatura";

export default function Disjuntores({ requisicao1, resposta1 }) {

  // TODO: esses dados deveriam vir da página Dimensionamento
  // const { requisicao } = route.params.requisicao;
  const requisicao = {
    tipoCircuito: "DISTRIBUICAO",
    utilizacaoCircuito: "TOMADA",
    fasesVoltagem: "TRIFASICO",
    voltagem: 380,
    metodoInstalacao: "A1",
    tipoCabo: "ALUMINIO",
    potenciaAtiva: 12000,
    potenciaAparente: 0,
    fatorDePotencia: 0.8,
    temperaturaAmbiente: 50,
    quantidadeCircuitosAgrupados: 2,
    comprimentoFio: 60
  };

  // TODO: esses dados deveriam vir da página Dimensionamento
  // const { resposta } = route.params.resposta;
  const resposta = {
    dadosDimensionados: {
      cabeamento: {
        correnteMaximaCondutor: 57.0,
        secaoNominalCondutor: 25.0,
        diametroExternoCaboRecomendado: 19.9,
        diametroNominalCaboRecomendado: 6.5
      },
      disjuntor: {
        correnteNominalDisjuntorRecomendado: 50,
        nomeDisjuntorRecomendado: "5SL1 350-7MB"
      },
      eletroduto: {
        diametroNominalEletrodutoSugeridoPolegadas: '1.1/4"',
        diametroNominalEletrodutoSugeridoMilimetros: 30,
        diametroExternoEletrodutoSugerido: 41.3,
        diametroInternoEletrodutoSugerido: 31.5
      }
    },
    dadosUtilizadosParaCalculo: {
      calculoSecaoCondutor: {
        calculoPotenciaAparente: {
          indicadorPotenciaAparenteInformada: false,
          potenciaAtiva: 12000,
          fatorDePotencia: 0.8,
          potenciaAparente: 15000
        },
        calculoCorrenteProjeto: {
          indicadorCircuitoTrifasico: true,
          potenciaAparente: 15000,
          voltagem: 380,
          correnteCircuito: 23,
          quantidadeCircuitosAgrupados: 2,
          fatorAgrupamento: 0.7071067811865475,
          temperaturaAmbiente: 50,
          isolacaoCabo: "PVC",
          fatorTemperatura: 0.71,
          correnteProjeto: 45
        },
        calculoDiametroMinimoCabo: {
          tipoCabo: "ALUMINIO",
          resistividadeCabo: 0.02857,
          tipoCircuito: "DISTRIBUICAO",
          indicadorCircuitoTrifasico: true,
          comprimentoFio: 60,
          correnteProjeto: 45,
          valorVariacaoTensao: 2,
          voltagem: 380,
          diametroCalculado: 17.5800877954020550435,
          utilizacaoCircuito: "TOMADA",
          minimoDiametroCabo: 2.5,
          indicadorMinimoDiametroUtilizado: false,
          fasesVoltagem: "TRIFASICO",
          cabosCarregados: 3,
          metodoInstalacao: "A1",
          materialCabo: "ALUMINIO",
          isolamentoCabo: "PVC"
        }
      },
      calculoDisjuntor: {
        fasesVoltagem: "TRIFASICO",
        cabosCarregados: 3,
        correnteProjeto: 45,
        correnteMaximaCabo: 57.0
      },
      calculoEletroduto: {
        secaoNominalCabo: 25.0,
        diametroCabo: 5.639148871948674,
        quantidadeCondutores: 2,
        diametroMinimoCalculado: 28.195744359743365
      }
    }
  };
  
  const [isAcordeonPotenciaAparenteOpen, setIsAcordeonPotenciaAparenteOpen] = useState(false);
  const [isAcordeonCorrenteCircuitoOpen, setIsAcordeonCorrenteCircuitoOpen] = useState(false);
  const [isAcordeonFatorAgrupamentoOpen, setIsAcordeonFatorAgrupamentoOpen] = useState(false);
  const [isAcordeonFatorTemperaturaOpen, setIsAcordeonFatorTemperaturaOpen] = useState(false);
  const [isAcordeonCorrenteProjetoOpen, setIsAcordeonCorrenteProjetoOpen] = useState(false);

  return (
    <ScrollView style={{ margin: 20 }}>
      <DadosInformados requestData={requisicao} />
      <CalculoPotenciaAparente isAcordeonOpen={isAcordeonPotenciaAparenteOpen} toggleAcordeon={() => setIsAcordeonPotenciaAparenteOpen(!isAcordeonPotenciaAparenteOpen)} responseData={resposta} />
      <CalculoCorrenteCircuito isAcordeonOpen={isAcordeonCorrenteCircuitoOpen} toggleAcordeon={() => setIsAcordeonCorrenteCircuitoOpen(!isAcordeonCorrenteCircuitoOpen)} responseData={resposta} />
      <CalculoFatorAgrupamento isAcordeonOpen={isAcordeonFatorAgrupamentoOpen} toggleAcordeon={() => setIsAcordeonFatorAgrupamentoOpen(!isAcordeonFatorAgrupamentoOpen)} responseData={resposta} />
      <CalculoFatorTemperatura isAcordeonOpen={isAcordeonFatorTemperaturaOpen} toggleAcordeon={() => setIsAcordeonFatorTemperaturaOpen(!isAcordeonFatorTemperaturaOpen)} responseData={resposta} />
      <CalculoCorrenteProjeto isAcordeonOpen={isAcordeonCorrenteProjetoOpen} toggleAcordeon={() => setIsAcordeonCorrenteProjetoOpen(!isAcordeonCorrenteProjetoOpen)} responseData={resposta} />
    </ScrollView>
  );
}
