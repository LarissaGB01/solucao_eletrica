import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import estilos from "../../../auxiliares/Dimensionamento/estilos";
import textos from "../../../auxiliares/Dimensionamento/textos";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function EletrodutoSugerido({ requisicao, resposta }) {

  const navigation = useNavigation();

  return <View>
    <Text style={estilos.textoTitulo}>
      {textos.respostaFinalCondutos.descricaoBotao}
    </Text>

    <Card containerStyle={estilos.cardResposta}>
      <View style={estilos.viewCardResposta}>
          <Image style={ estilos.imagemResposta } 
            source={ textos.respostaFinalCondutos.imagem } 
          />

          <View style={estilos.viewTextoResposta}>
            <Text style={estilos.textoResposta}>
              {textos.respostaFinalCondutos.dados[0]}
            </Text>

            <Text style={estilos.textoResposta}>
              {resposta.dadosDimensionados.eletroduto.diametroNominalEletrodutoSugeridoPolegadas}
            </Text>

            <Text style={estilos.textoResposta}>
              {resposta.dadosDimensionados.eletroduto.diametroNominalEletrodutoSugeridoMilimetros.toFixed(2)}
              {textos.unidadesMedida.milimetro}
            </Text>
          </View>
      </View>
    </Card>

    <TouchableOpacity style={estilos.botao}
      onPress={() =>
        navigation.navigate("Eletrodutos", {
          requisicao1: requisicao,
          resposta1: resposta
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
