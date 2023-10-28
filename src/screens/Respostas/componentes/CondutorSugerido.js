import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import estilos from "../../../auxiliares/Respostas/estilos";
import textos from "../../../auxiliares/Respostas/textos";

export default function CondutorSugerido({ requisicao, resposta }) {

  const navigation = useNavigation();

  const dimensionados = resposta.dadosDimensionados.cabeamento;

  return (
    <View>
      <Text style={estilos.textoTitulo}>
        {textos.respostaFinalCabeamento.descricaoBotao}
      </Text>

      <Card containerStyle={estilos.cardResposta}>
        <View style={estilos.viewCardResposta}>
          <Image style={estilos.imagemResposta}
            source={textos.respostaFinalCabeamento.imagem}
          />

          <View style={estilos.viewTextoResposta}>
            <Text style={estilos.textoRespostaDescricao}>
              {textos.respostaFinalCabeamento.dados[0]}
            </Text>

            <Text style={estilos.textoRespostaFinal}>
              {dimensionados.secaoNominalCondutor.toFixed(2)}
              {textos.unidadesMedida.secao}
            </Text>

            <Text style={estilos.textoRespostaDescricao}>
              {textos.respostaFinalCabeamento.dados[1]}
            </Text>

            <Text style={estilos.textoRespostaFinal}>
              {dimensionados.correnteMaximaCondutor.toFixed(2)}
              {textos.unidadesMedida.corrente}
            </Text>
          </View>
        </View>
      </Card>

      <TouchableOpacity style={estilos.botao}
        onPress={() =>
          navigation.navigate("Condutores", {
            requisicao: requisicao,
            resposta: resposta
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
    </View>
  );
}
