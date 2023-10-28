import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function CondutorRecomendado({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dadosCalculo = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoDiametroMinimoCabo;
  const dadosResposta = responseData.dadosDimensionados.cabeamento;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <Card containerStyle={estilos.cardResposta}>
            <View style={estilos.viewCardResposta}>

                <Image style={ estilos.imagemResposta } 
                  source={ textos.respostaFinal.imagem } 
                />

                <View style={estilos.viewTextoResposta}>

                  <Text style={estilos.textoResposta}>
                    {textos.etapasCalculos[8]}
                    {dadosResposta.secaoNominalCondutor.toFixed(2)}
                    {textos.unidadesMedida.secao}
                  </Text>

                  <Text style={estilos.textoResposta}>
                    {textos.etapasCalculos[9]}
                    {dadosResposta.correnteMaximaCondutor.toFixed(2)}
                    {textos.unidadesMedida.corrente}
                  </Text>

                  {isAcordeonOpen ? (
                    <AntDesign name="caretup" size={14} color="black" />
                  ) : (
                    <AntDesign name="caretdown" size={14} color="black" />
                  )}
                </View>
            </View>
        </Card>
      </TouchableOpacity>

      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={estilos.internoAcordeao}>

          <Text style={estilos.dados}>
            {textos.tabelas.secaoCondutor.dados[0]}
            {dadosCalculo.metodoInstalacao}
          </Text>

          <Text style={estilos.dados}>
            {textos.tabelas.secaoCondutor.dados[1]}
            {dadosCalculo.cabosCarregados}
          </Text>

          <Text style={estilos.dados}>
            {textos.tabelas.secaoCondutor.dados[2]}
            {dadosCalculo.materialCabo}
          </Text>

          <Text style={estilos.dados}>
            {textos.tabelas.secaoCondutor.dados[3]}
            {dadosCalculo.isolamentoCabo}
          </Text>

          <Text style={estilos.dados}>
            {textos.tabelas.secaoCondutor.dados[4]}
            {dadosCalculo.correnteProjeto}
          </Text>

          <Text style={estilos.dados}>
            {textos.tabelas.secaoCondutor.dados[5]}
            {dadosCalculo.diametroCalculado.toFixed(2)}
          </Text>

          {dadosCalculo.isolamentoCabo === "PVC" ? (
            <Image style={ estilos.imagemTabela } source={ textos.tabelas.secaoCondutor.imagemPVC } />
          ) : (
            <Image style={ estilos.imagemTabela } source={ textos.tabelas.secaoCondutor.imagemEPR } />
          )}
          
          <Text>{textos.tabelas.secaoCondutor.fonte}</Text>
        </View>
      </Collapsible>
    </View>
  );
}
