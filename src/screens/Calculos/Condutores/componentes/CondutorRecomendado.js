import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function CondutorRecomendado({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dadosCalculo = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoDiametroMinimoCabo;
  const dadosResposta = responseData.dadosDimensionados.cabeamento;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <Card containerStyle={ [estilos.cardOpcao] }>
            <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 10 }}>
                <Image style={ estilos.imagemOpcoes } source={ textos.respostaFinal.imagem } />
                <View style={{ flex: 1, padding: 10, alignItems: 'center' }}>

                  <Text style={estilos.textoOpcoes}>
                    {textos.etapasCalculos[8]}
                    {dadosResposta.secaoNominalCondutor.toFixed(2)}
                    {textos.unidadesMedida.secao}
                  </Text>

                  <Text style={estilos.textoOpcoes}>
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
