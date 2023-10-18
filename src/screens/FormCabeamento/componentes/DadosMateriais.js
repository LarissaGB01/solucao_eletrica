import React from "react";
import { Text, View } from "react-native";
import textos from "../../../auxiliares/FormCabeamento/textos";
import InputSpinner from "react-native-input-spinner";
import { Picker } from "@react-native-picker/picker";
import estilos from "../../../auxiliares/FormCabeamento/estilos";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DadosMateriais({ dadosFormulario, atualizarValor }) {
    return <KeyboardAwareScrollView>
        <Text style={estilos.enunciado}>{textos.instalacao.tipoCabo.pergunta}</Text>
        <Picker
            selectedValue={dadosFormulario.tipoCabo}
            onValueChange={(itemValue, itemIndex) => atualizarValor("tipoCabo", itemValue)}
        >
            {textos.instalacao.tipoCabo.respostas.map((resposta, index) => (
                <Picker.Item key={resposta} label={resposta} value={resposta} />
            ))}
        </Picker>

        <Text style={estilos.enunciado}>{textos.instalacao.comprimento.pergunta}</Text>
        <InputSpinner
            max={1000}
            min={0}
            step={10}
            color="#FF8F5C"
            colorAsBackground='false'
            value={dadosFormulario.comprimentoFio}
            onChange={(itemValue, itemIndex) => atualizarValor("comprimentoFio", itemValue)}
        />
    </KeyboardAwareScrollView>
}