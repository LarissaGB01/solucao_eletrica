import React from "react";
import { Text } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import textos from "../../../../auxiliares/Forms/textosCabeamento";
import estilos from "../../../../auxiliares/Forms/estilos";

export default function DadosInstalacao({ dadosFormulario, atualizarValor }) {
    return <KeyboardAwareScrollView>
        <Text style={estilos.enunciado}>{textos.metodo.pergunta}</Text>
        <Picker
            selectedValue={dadosFormulario.metodoInstalacao}
            onValueChange={(itemValue, itemIndex) => atualizarValor("metodoInstalacao", itemValue)}
        >
            {textos.metodo.respostas.map((resposta, index) => (
                <Picker.Item key={resposta} label={resposta} value={resposta} />
            ))}
        </Picker>

        <Text style={estilos.enunciado}>{textos.circuitosAgrupados.pergunta}</Text>
        <InputSpinner
            max={100}
            min={0}
            step={1}
            color="#FF8F5C"
            value={dadosFormulario.circuitosAgrupados}
            onChange={(itemValue, itemIndex) => atualizarValor("quantidadeCircuitosAgrupados", itemValue)}
        />
    </KeyboardAwareScrollView>
}