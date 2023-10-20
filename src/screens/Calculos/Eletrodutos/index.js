import React, { useState } from "react";
import { ScrollView } from "react-native";
import DadosInformados from "./componentes/DadosInformados";
import DadosCalculados from "./componentes/DadosCalculados";
import CondutorRecomendado from "./componentes/CondutorRecomendado";
import estilos from "../../../auxiliares/Calculos/estilos";
import DiametroCondutor from "./componentes/DiametroCondutor";
import DiametroEletroduto from "./componentes/DiametroEletroduto";
import EletrodutoRecomendado from "./componentes/EletrodutoRecomendado";
import apiMock from "../../../auxiliares/apiMock";

export default function Eletrodutos({ requisicao1, resposta1 }) {
  
  // TODO: esses dados deveriam vir da página Dimensionamento
  // const { requisicao } = route.params.requisicao;
  // const { resposta } = route.params.resposta;
  const requisicao = apiMock.requisicao;
  const resposta = apiMock.resposta;
  
  const [isAcordeonDadosInformadosOpen, setIsAcordeonDadosInformadosOpen] = useState(false);
  const [isAcordeonDadosCalculadosOpen, setIsAcordeonDadosCalculadosOpen] = useState(false);
  const [isAcordeonCondutorRecomendadoOpen, setIsAcordeonCondutorRecomendadoOpen] = useState(false);
  const [isAcordeonDiametroCondutorOpen, setIsAcordeonDiametroCondutorOpen] = useState(false);
  const [isAcordeonDiametroEletrodutoOpen, setIsAcordeonDiametroEletrodutoOpen] = useState(false);
  const [isAcordeonDisjuntorRecomendadoOpen, setIsAcordeonDisjuntorRecomendadoOpen] = useState(false);

  return (
    <ScrollView style={estilos.telaInteira}>
      <DadosInformados requestData={requisicao} isAcordeonOpen={isAcordeonDadosInformadosOpen} toggleAcordeon={() => setIsAcordeonDadosInformadosOpen(!isAcordeonDadosInformadosOpen)} />
      <DadosCalculados responseData={resposta} isAcordeonOpen={isAcordeonDadosCalculadosOpen} toggleAcordeon={() => setIsAcordeonDadosCalculadosOpen(!isAcordeonDadosCalculadosOpen)} />
      <CondutorRecomendado responseData={resposta} isAcordeonOpen={isAcordeonCondutorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonCondutorRecomendadoOpen(!isAcordeonCondutorRecomendadoOpen)} />
      <DiametroCondutor resposta={resposta} isAcordeonOpen={isAcordeonDiametroCondutorOpen} toggleAcordeon={() => setIsAcordeonDiametroCondutorOpen(!isAcordeonDiametroCondutorOpen)} />
      <DiametroEletroduto resposta={resposta} isAcordeonOpen={isAcordeonDiametroEletrodutoOpen} toggleAcordeon={() => setIsAcordeonDiametroEletrodutoOpen(!isAcordeonDiametroEletrodutoOpen)} />
      <EletrodutoRecomendado responseData={resposta} isAcordeonOpen={isAcordeonDisjuntorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonDisjuntorRecomendadoOpen(!isAcordeonDisjuntorRecomendadoOpen)} />
    </ScrollView>
  );
}
