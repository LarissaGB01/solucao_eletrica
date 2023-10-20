import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import MathView from "react-native-math-view";

export default function DisjuntorRecomendado({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dadosCalculo = responseData.dadosUtilizadosParaCalculo.calculoDisjuntor;
  const dadosResposta = responseData.dadosDimensionados.disjuntor;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <Card containerStyle={estilos.cardResposta}>
            <View style={estilos.viewCardResposta}>

                <Image style={ estilos.imagemResposta } 
                  source={ textos.respostaFinal.imagemDisjuntor } 
                />

                <View style={estilos.viewTextoResposta}>
                  <Text style={estilos.textoRespostaDescricao}>
                    {textos.etapasCalculos[10]}
                  </Text>

                  <Text style={estilos.textoRespostaFinal}>
                    {dadosResposta.nomeDisjuntorRecomendado}
                  </Text>

                  <Text style={estilos.textoRespostaDescricao}>
                    {textos.etapasCalculos[11]}
                  </Text>

                  <Text style={estilos.textoRespostaFinal}>
                    {dadosResposta.correnteNominalDisjuntorRecomendado.toFixed(2)}
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
            {textos.tabelas.disjuntorSiemens.dados[0]}
          </Text>

          <Text style={estilos.dados}>
            {textos.tabelas.disjuntorSiemens.dados[dadosCalculo.cabosCarregados]}
          </Text>
      
          <MathView style={estilos.dados}
            math={`${dadosCalculo.correnteProjeto} \\leq
              ${textos.tabelas.disjuntorSiemens.dados[4]} \\leq
              ${dadosCalculo.correnteMaximaCabo}`}
          />


          <Image style={ estilos.imagemTabela } source={ textos.tabelas.disjuntorSiemens.imagem } />

          <Text>{textos.tabelas.disjuntorSiemens.fonte}</Text>
        </View>
      </Collapsible>
    </View>
  );
}
