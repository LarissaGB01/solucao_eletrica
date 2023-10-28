import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import estilos from "../../../auxiliares/Respostas/estilos";
import textos from "../../../auxiliares/Respostas/textos";

export default function DisjuntorSugerido({ requisicao, resposta, origemCabeamento }) {

  const navigation = useNavigation();
  const dimensionado = origemCabeamento ? resposta.dadosDimensionados.disjuntor : resposta.disjuntor;
  const disjuntorEncontrado = dimensionado.correnteNominalDisjuntorRecomendado != 0;

  return <View>
    <Text style={estilos.textoTitulo}>
      {textos.respostaFinalDisjuntores.descricaoBotao}
    </Text>

    <Card containerStyle={estilos.cardResposta}>
      <View style={estilos.viewCardResposta}>
          <Image style={ estilos.imagemResposta } 
            source={ textos.respostaFinalDisjuntores.imagem } 
          />

          {disjuntorEncontrado ? (
            <View style={estilos.viewTextoResposta}>
              <Text style={estilos.textoRespostaDescricao}>
                {textos.respostaFinalDisjuntores.dados[0]}
              </Text>

              <Text style={estilos.textoRespostaFinal}>
                {dimensionado.nomeDisjuntorRecomendado}
              </Text>

              <Text style={estilos.textoRespostaDescricao}>
                {textos.respostaFinalDisjuntores.dados[1]}
              </Text>

              <Text style={estilos.textoRespostaFinal}>
                {dimensionado.correnteNominalDisjuntorRecomendado.toFixed(2)}
                {textos.unidadesMedida.corrente}
              </Text>

              <Text style={estilos.textoResposta}>
                {textos.respostaFinalDisjuntores.dados[2]}
              </Text>
            </View>
          ) : (
            <View style={estilos.viewTextoResposta}>
              <Text style={estilos.textoResposta}>
                {textos.respostaFinalDisjuntores.naoEncontrado}
              </Text>
            </View>
          )}
      </View>
    </Card>

    <TouchableOpacity style={estilos.botao}
      onPress={() =>
        navigation.navigate("Disjuntores", {
          requisicao: requisicao,
          resposta: resposta,
          origemCabeamento: origemCabeamento
        })
      }
    >
      <View style={estilos.viewBotao}>
        <Text style={estilos.textobotao}> 
          {textos.botoesCalculos} 
        </Text>

        <AntDesign name="doubleright" size={24} color="white" />
      </View>
    </TouchableOpacity>
  </View>;
}
