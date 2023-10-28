import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import MathView from "react-native-math-view";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function DisjuntorRecomendado({ isAcordeonOpen, origemCabeamento, toggleAcordeon, responseData }) {
 
  const dadosCalculo = origemCabeamento ? responseData.dadosUtilizadosParaCalculo.calculoDisjuntor : responseData.dadosUtilizadosParaCalculo;
  const dadosResposta = origemCabeamento ? responseData.dadosDimensionados.disjuntor : responseData.disjuntor;
  const disjuntorEncontrado = dadosResposta.correnteNominalDisjuntorRecomendado != 0;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <Card containerStyle={estilos.cardResposta}>
            <View style={estilos.viewCardResposta}>

                <Image style={ estilos.imagemResposta } 
                  source={ textos.respostaFinal.imagemDisjuntor } 
                />
                
                <View style={estilos.viewTextoResposta}>
                  {disjuntorEncontrado ? (
                    <View>
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
                    </View>
                  ) : (
                    <View>
                      <Text style={estilos.textoResposta}>
                        {textos.valoresFixos.disjuntorNaoEncontrado}
                      </Text>
                    </View>
                  )}

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
