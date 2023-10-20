import React from "react";
import { FlatList, View } from "react-native";
import textos from "../../auxiliares/Home/textos";
import estilos from "../../auxiliares/Home/estilos";
import OpcaoEscolha from "./componentes/OpcaoEscolha";
import Topo from "./componentes/Topo";

export default function Home({ navigation }) {

    return ( 
        <View style={ estilos.telaInteira }>
          <FlatList
            data={ textos.opcoes }
            renderItem={ ({ item }) => (<OpcaoEscolha item={item} navigation={navigation}/>) }
            keyExtractor={ (item) => item.descricaoBotao }
            style={ [estilos.listaOpcoes] }
            numColumns={ 2 }
            ListHeaderComponent={<Topo dadosTopo={ textos.topo }/>}/>
        </View>
    );
}
