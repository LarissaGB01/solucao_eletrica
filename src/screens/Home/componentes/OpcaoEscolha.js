import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import estilos from "../../../auxiliares/Home/estilos";
import { useNavigation } from "@react-navigation/native";

export default function OpcaoEscolha({ item }) {
    const navigation = useNavigation();

    return <TouchableOpacity onPress={() => navigation.navigate(item.navegacao)}>
        <Card containerStyle={ [estilos.cardOpcao] }>
            <View >
                <Image style={ estilos.imagemOpcoes } source={ item.imagem } />
                <Text style={ estilos.textoOpcoes }>{ item.descricaoBotao }</Text>
            </View>
        </Card>
    </TouchableOpacity>
}