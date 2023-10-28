import React from "react";
import { Text, TextInput, View } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

import textos from "../../../../auxiliares/Forms/textosDisjuntores";
import estilos from "../../../../auxiliares/Forms/estilos";

export default function DadosCircuito({ dadosFormulario, atualizarValor }) {
    return <View>
        <Text style={estilos.enunciado}>{textos.eletrico.pergunta}</Text>
        <SegmentedControl
            values={textos.eletrico.fases.map(fase => fase.display)}
            selectedIndex={2}
            onChange={(event) => {
                atualizarValor("fasesVoltagem", textos.eletrico.fases[event.nativeEvent.selectedSegmentIndex].campo);
            }}
        />

        <View style={estilos.enunciadoComposto}>
            <Text style={estilos.enunciado}>{textos.correntes.descricaoProjeto}</Text>
            <View style={estilos.espacoPreenchimento}>
                <TextInput
                    defaultValue="0"
                    maxLength={8}
                    keyboardType="numeric"
                    style={estilos.entradaTexto}
                    onChangeText={(number) => {
                        atualizarValor("correnteProjeto", number);
                    }}>
                </TextInput>
            </View>
            <Text style={estilos.resposta}>{textos.correntes.medida}</Text>
        </View>

        <View style={estilos.enunciadoComposto}>
            <Text style={estilos.enunciado}>{textos.correntes.descricaoCabo}</Text>
            <View style={estilos.espacoPreenchimento}>
                <TextInput
                    defaultValue="0"
                    maxLength={8}
                    keyboardType="numeric"
                    style={estilos.entradaTexto}
                    onChangeText={(number) => {
                        atualizarValor("correnteMaximaCabo", number);
                    }}>
                </TextInput>
                <View style={estilos.linhaPreenchimento}/>
            </View>
            <Text style={estilos.resposta}>{textos.correntes.medida}</Text>
        </View>
    </View>
}