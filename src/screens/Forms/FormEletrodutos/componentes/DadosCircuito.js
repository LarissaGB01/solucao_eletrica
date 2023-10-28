import React from "react";
import { Text, TextInput, View } from "react-native";
import InputSpinner from "react-native-input-spinner";

import textos from "../../../../auxiliares/Forms/textosEletrodutos";
import estilos from "../../../../auxiliares/Forms/estilos";

export default function DadosCircuito({ dadosFormulario, atualizarValor }) {
    return <View>
        <Text style={estilos.enunciado}>{textos.eletrico.pergunta}</Text>

        <View style={estilos.enunciadoComposto}>
            <Text style={estilos.enunciado}>{textos.sessaoCabo.descricao}</Text>
            <View style={estilos.espacoPreenchimento}>
                <TextInput
                    defaultValue="0"
                    maxLength={8}
                    keyboardType="numeric"
                    style={estilos.entradaTexto}
                    onChangeText={(number) => {
                        atualizarValor("secaoNominalCabo", number);
                    }}>
                </TextInput>
            </View>
            <Text style={estilos.resposta}>{textos.sessaoCabo.medida}</Text>
        </View>

        <Text style={estilos.enunciado}>{textos.circuitosAgrupados.pergunta}</Text>
        <InputSpinner
            max={100}
            min={0}
            step={1}
            color="#FF8F5C"
            value={dadosFormulario.circuitosAgrupados}
            onChange={(itemValue, itemIndex) => atualizarValor("quantidadeCondutores", itemValue)}
        />
    </View>
}