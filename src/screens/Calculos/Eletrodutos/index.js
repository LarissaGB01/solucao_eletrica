import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import estilos from "../../../auxiliares/Calculos/estilos";

// componentes
import DadosInformados from "./componentes/DadosInformados";
import DadosCalculados from "./componentes/DadosCalculados";
import CondutorRecomendado from "./componentes/CondutorRecomendado";
import DiametroCondutor from "./componentes/DiametroCondutor";
import DiametroEletroduto from "./componentes/DiametroEletroduto";
import EletrodutoRecomendado from "./componentes/EletrodutoRecomendado";

export default function Eletrodutos({ route, navigation }) {
  
  const origemCabeamento = Boolean(route.params.origemCabeamento);
  const requisicao = route.params.requisicao;
  const resposta = route.params.resposta;
  
  const [isAcordeonDadosInformadosOpen, setIsAcordeonDadosInformadosOpen] = useState(false);
  const [isAcordeonDadosCalculadosOpen, setIsAcordeonDadosCalculadosOpen] = useState(false);
  const [isAcordeonCondutorRecomendadoOpen, setIsAcordeonCondutorRecomendadoOpen] = useState(false);
  const [isAcordeonDiametroCondutorOpen, setIsAcordeonDiametroCondutorOpen] = useState(false);
  const [isAcordeonDiametroEletrodutoOpen, setIsAcordeonDiametroEletrodutoOpen] = useState(false);
  const [isAcordeonDisjuntorRecomendadoOpen, setIsAcordeonDisjuntorRecomendadoOpen] = useState(false);

  return (
    <ScrollView style={estilos.telaInteira}>
      <DadosInformados requestData={requisicao} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDadosInformadosOpen} toggleAcordeon={() => setIsAcordeonDadosInformadosOpen(!isAcordeonDadosInformadosOpen)} />
      {origemCabeamento ? (
        <View>
          <DadosCalculados responseData={resposta} isAcordeonOpen={isAcordeonDadosCalculadosOpen} toggleAcordeon={() => setIsAcordeonDadosCalculadosOpen(!isAcordeonDadosCalculadosOpen)} />
          <CondutorRecomendado responseData={resposta} isAcordeonOpen={isAcordeonCondutorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonCondutorRecomendadoOpen(!isAcordeonCondutorRecomendadoOpen)} />
        </View>
      ) : null }
      <DiametroCondutor resposta={resposta} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDiametroCondutorOpen} toggleAcordeon={() => setIsAcordeonDiametroCondutorOpen(!isAcordeonDiametroCondutorOpen)} />
      <DiametroEletroduto resposta={resposta} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDiametroEletrodutoOpen} toggleAcordeon={() => setIsAcordeonDiametroEletrodutoOpen(!isAcordeonDiametroEletrodutoOpen)} />
      <EletrodutoRecomendado responseData={resposta} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDisjuntorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonDisjuntorRecomendadoOpen(!isAcordeonDisjuntorRecomendadoOpen)} />
    </ScrollView>
  );
}
