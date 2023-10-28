import React from "react";
import { Text } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import textos from "../../../../auxiliares/Forms/textosCabeamento";
import estilos from "../../../../auxiliares/Forms/estilos";

export default function DadosMateriais({ dadosFormulario, atualizarValor }) {
    return <KeyboardAwareScrollView>
        <Text style={estilos.enunciado}>{textos.tipoCabo.pergunta}</Text>
        <Picker
            selectedValue={dadosFormulario.tipoCabo}
            onValueChange={(itemValue, itemIndex) => atualizarValor("tipoCabo", itemValue)}
        >
            {textos.tipoCabo.respostas.map((resposta, index) => (
                <Picker.Item key={resposta} label={resposta} value={resposta} />
            ))}
        </Picker>

        <Text style={estilos.enunciado}>{textos.comprimento.pergunta}</Text>
        <InputSpinner
            max={1000}
            min={0}
            step={10}
            color="#FF8F5C"
            value={dadosFormulario.comprimentoFio}
            onChange={(itemValue, itemIndex) => atualizarValor("comprimentoFio", itemValue)}
        />
    </KeyboardAwareScrollView>
}