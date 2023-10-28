import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function EletrodutoRecomendado({ isAcordeonOpen, origemCabeamento, toggleAcordeon, responseData }) {
 
  const dadosCalculo = origemCabeamento ? responseData.dadosUtilizadosParaCalculo.calculoEletroduto : responseData.dadosUtilizadosParaCalculo;
  const dadosResposta = origemCabeamento ? responseData.dadosDimensionados.eletroduto : responseData.eletroduto;
  const eletrodutoEncontrado = dadosResposta.diametroNominalEletrodutoSugeridoMilimetros != 0;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <Card containerStyle={estilos.cardResposta}>
            <View style={estilos.viewCardResposta}>
                <Image style={ estilos.imagemResposta } 
                  source={ textos.respostaFinal.imagemEletroduto } 
                />
                
                <View style={estilos.viewTextoResposta}>
                  {eletrodutoEncontrado ? (
                    <View>
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
                    </View>
                  ) : (
                    <View>
                      <Text style={estilos.textoResposta}>
                        {textos.valoresFixos.eletrodutoNaoEncontrado}
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
