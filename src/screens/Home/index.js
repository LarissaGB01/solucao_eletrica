import React from "react";
import { FlatList, StatusBar, View, SafeAreaView } from "react-native";
import textos from "./auxiliares/textos";
import estilos from "./auxiliares/estilos";
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
