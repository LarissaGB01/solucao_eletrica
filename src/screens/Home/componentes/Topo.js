import React from "react";
import { Text, View, Image } from "react-native";
import estilos from "../auxiliares/estilos";

export default function Topo({ dadosTopo }) {
    return <View style={ estilos.topo }>
        <View style={ estilos.vistaBoasVindas }>
            <Image style={ estilos.imagem } source={ dadosTopo.imagemLogo } />
            <View>
              <Text style={ estilos.nomeLogo }>{ dadosTopo.nomeApp }</Text>
              <Text style={ estilos.boasVindas }>{ dadosTopo.boasVindas }</Text>
            </View>
        </View>
        <Text style={ estilos.legenda }>{ dadosTopo.instrucoes }</Text>
    </View>
}