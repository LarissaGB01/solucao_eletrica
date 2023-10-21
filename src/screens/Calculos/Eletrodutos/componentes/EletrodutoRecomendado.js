import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function EletrodutoRecomendado({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dadosCalculo = responseData.dadosUtilizadosParaCalculo.calculoEletroduto;
  const dadosResposta = responseData.dadosDimensionados.eletroduto;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <Card containerStyle={estilos.cardResposta}>
            <View style={estilos.viewCardResposta}>
                <Image style={ estilos.imagemResposta } 
                  source={ textos.respostaFinal.imagemEletroduto } 
                />

                <View style={estilos.viewTextoResposta}>
                  <Text style={estilos.textoResposta}>
                    {textos.etapasCalculos[14]}
                  </Text>

                  <Text style={estilos.textoResposta}>
                    {dadosResposta.diametroNominalEletrodutoSugeridoPolegadas}
                  </Text>

                  <Text style={estilos.textoResposta}>
                    {dadosResposta.diametroNominalEletrodutoSugeridoMilimetros.toFixed(2)}
                    {textos.unidadesMedida.diametro}
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
            {textos.tabelas.eletrodutoKanaflex.dados[0]}
            {dadosCalculo.diametroMinimoCalculado}
          </Text>

          <Image style={ estilos.imagemTabela } source={ textos.tabelas.eletrodutoKanaflex.imagem } />

          <Text>{textos.tabelas.eletrodutoKanaflex.fonte}</Text>
        </View>
      </Collapsible>
    </View>
  );
}
