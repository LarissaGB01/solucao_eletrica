import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Collapsible from "react-native-collapsible";
import estilos from "../../../auxiliares/BaseTeorica/estilos";
import textos from "../../../auxiliares/BaseTeorica/textos";
import { AntDesign } from "@expo/vector-icons";
import abrirLink from "../../../config/linksExternos";

export default function CondutorRecomendado({ isAcordeonOpen, toggleAcordeon }) {
  return (
    <View style={estilos.espacoCalculos}>

      <TouchableOpacity onPress={toggleAcordeon}>
        <View style={estilos.viewBotao}>
          <Text style={estilos.textoDestaqueAcordeao}>
            {textos.etapasCalculos[8]}
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
          <Image style={ estilos.imagemTabela } 
            source={ textos.tabelas.secaoCondutor.imagemPVC } />

          <Image style={ estilos.imagemTabela } 
            source={ textos.tabelas.secaoCondutor.imagemEPR } />

          <TouchableOpacity style={estilos.botao} 
            onPress={() => abrirLink('ABNT')}
          >
            <View style = {estilos.linkExterno}>
              <Text  style={[estilos.nomeFonte]}>
                {textos.tabelas.secaoCondutor.fonte}
              </Text>

              <AntDesign name="link" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </Collapsible>
    </View>
  );
}
