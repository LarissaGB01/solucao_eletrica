import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import estilos from "../../../auxiliares/Respostas/estilos";
import textos from "../../../auxiliares/Respostas/textos";

export default function EletrodutoSugerido({ requisicao, resposta, origemCabeamento }) {

  const navigation = useNavigation();
  const dimensionado = origemCabeamento ? resposta.dadosDimensionados.eletroduto : resposta.eletroduto;
  const eletrodutoEncontrado = dimensionado.diametroNominalEletrodutoSugeridoMilimetros != 0;

  return <View>
    <Text style={estilos.textoTitulo}>
      {textos.respostaFinalCondutos.descricaoBotao}
    </Text>

    <Card containerStyle={estilos.cardResposta}>
      <View style={estilos.viewCardResposta}>
          <Image style={ estilos.imagemResposta } 
            source={ textos.respostaFinalCondutos.imagem } 
          />

          {eletrodutoEncontrado ? (
            <View style={estilos.viewTextoResposta}>
              <Text style={estilos.textoResposta}>
                {textos.respostaFinalCondutos.dados[0]}
              </Text>

              <Text style={estilos.textoResposta}>
                {dimensionado.diametroNominalEletrodutoSugeridoPolegadas}
              </Text>

              <Text style={estilos.textoResposta}>
                {dimensionado.diametroNominalEletrodutoSugeridoMilimetros.toFixed(2)}
                {textos.unidadesMedida.milimetro}
              </Text>
            </View>
          ) : (
            <View style={estilos.viewTextoResposta}>
              <Text style={estilos.textoResposta}>
                {textos.respostaFinalCondutos.naoEncontrado}
              </Text>
            </View>
          )}
      </View>
    </Card>

    <TouchableOpacity style={estilos.botao}
      onPress={() =>
        navigation.navigate("Eletrodutos", {
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
