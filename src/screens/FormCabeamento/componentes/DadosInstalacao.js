import React from "react";
import { Text } from "react-native";
import textos from "../../../auxiliares/FormCabeamento/textos";
import InputSpinner from "react-native-input-spinner";
import { Picker } from "@react-native-picker/picker";
import estilos from "../../../auxiliares/FormCabeamento/estilos";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DadosInstalacao({ dadosFormulario, atualizarValor }) {
    return <KeyboardAwareScrollView>
        <Text style={estilos.enunciado}>{textos.instalacao.metodo.pergunta}</Text>
        <Picker
            selectedValue={dadosFormulario.metodoInstalacao}
            onValueChange={(itemValue, itemIndex) => atualizarValor("metodoInstalacao", itemValue)}
        >
            {textos.instalacao.metodo.respostas.map((resposta, index) => (
                <Picker.Item key={resposta} label={resposta} value={resposta} />
            ))}
        </Picker>

        <Text style={estilos.enunciado}>{textos.instalacao.circuitosAgrupados.pergunta}</Text>
        <InputSpinner
            max={100}
            min={0}
            step={1}
            color="#FF8F5C"
            colorAsBackground='false'
            value={dadosFormulario.circuitosAgrupados}
            onChange={(itemValue, itemIndex) => atualizarValor("circuitosAgrupados", itemValue)}
        />
    </KeyboardAwareScrollView>
}