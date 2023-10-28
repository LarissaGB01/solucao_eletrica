import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import estilos from "../../../auxiliares/Calculos/estilos";

// componentes
import DadosInformados from "./componentes/DadosInformados";
import DadosCalculados from "./componentes/DadosCalculados";
import CondutorRecomendado from "./componentes/CondutorRecomendado";
import EquacaoPrincipal from "./componentes/EquacaoPrincipal";
import DisjuntorRecomendado from "./componentes/DisjuntorRecomendado";

export default function Disjuntores({ route, navigation }) {

  const origemCabeamento = Boolean(route.params.origemCabeamento);
  const requisicao = route.params.requisicao;
  const resposta = route.params.resposta;
  
  const [isAcordeonDadosInformadosOpen, setIsAcordeonDadosInformadosOpen] = useState(false);
  const [isAcordeonDadosCalculadosOpen, setIsAcordeonDadosCalculadosOpen] = useState(false);
  const [isAcordeonCondutorRecomendadoOpen, setIsAcordeonCondutorRecomendadoOpen] = useState(false);
  const [isAcordeonDisjuntorRecomendadoOpen, setIsAcordeonDisjuntorRecomendadoOpen] = useState(false);

  return (
    <ScrollView style={estilos.telaInteira}>
      <DadosInformados requestData={requisicao} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDadosInformadosOpen} toggleAcordeon={() => setIsAcordeonDadosInformadosOpen(!isAcordeonDadosInformadosOpen)} />
      {origemCabeamento ? (
        <View>
          <DadosCalculados responseData={resposta} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDadosCalculadosOpen} toggleAcordeon={() => setIsAcordeonDadosCalculadosOpen(!isAcordeonDadosCalculadosOpen)} />
          <CondutorRecomendado responseData={resposta} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonCondutorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonCondutorRecomendadoOpen(!isAcordeonCondutorRecomendadoOpen)} />
        </View>
      ) : null }
      <EquacaoPrincipal resposta={resposta} origemCabeamento = {origemCabeamento} />
      <DisjuntorRecomendado responseData={resposta} origemCabeamento = {origemCabeamento} isAcordeonOpen={isAcordeonDisjuntorRecomendadoOpen} toggleAcordeon={() => setIsAcordeonDisjuntorRecomendadoOpen(!isAcordeonDisjuntorRecomendadoOpen)} />
    </ScrollView>
  );
}
