import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";

import estilos from "../../../../auxiliares/Calculos/estilos";
import textos from "../../../../auxiliares/Calculos/textos";

export default function FatorTemperatura({ isAcordeonOpen, toggleAcordeon, responseData }) {
 
  const dados = responseData.dadosUtilizadosParaCalculo.calculoSecaoCondutor.calculoCorrenteProjeto;

  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[3]}
            {dados.fatorTemperatura.toFixed(2)}
          </Text>

          {isAcordeonOpen ? (
            <AntDesign name="caretup" size={14} color="white" />
          ) : (
            <AntDesign name="caretdown" size={14} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={!isAcordeonOpen}>
        <View style={estilos.internoAcordeao}>

          <Text style={estilos.dados}>{textos.tabelas.fatorTemperatura.dados[0]}
            {dados.temperaturaAmbiente}
            {textos.unidadesMedida.temperatura}
          </Text>

          <Text style={estilos.dados}>{textos.tabelas.fatorTemperatura.dados[1]}
            {dados.isolacaoCabo}
          </Text>
          
          <Image style={estilos.imagemTabela} 
            source={ textos.tabelas.fatorTemperatura.imagem } 
          />
          
          <Text>{textos.tabelas.fatorTemperatura.fonte}</Text>
        </View>
      </Collapsible>
    </View>
  );
}
