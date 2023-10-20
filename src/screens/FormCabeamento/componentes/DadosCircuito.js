import React from "react";
import { Text } from "react-native";
import textos from "../../../auxiliares/FormCabeamento/textos";
import { Picker } from "@react-native-picker/picker";
import InputSpinner from "react-native-input-spinner";
import estilos from "../../../auxiliares/FormCabeamento/estilos";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DadosCircuito({ dadosFormulario, atualizarValor }) {
    return <KeyboardAwareScrollView>
        <Text style={estilos.enunciado}>{textos.finalidade.pergunta}</Text>
        <Picker
            selectedValue={dadosFormulario.tipoCircuito}
            onValueChange={(itemValue, itemIndex) => atualizarValor("tipoCircuito", itemValue)}
        >
            {textos.finalidade.respostas.map((resposta, index) => (
                <Picker.Item key={resposta.display} label={resposta.display} value={resposta.campo} />
            ))}
        </Picker>

        <Text style={estilos.enunciado}>{textos.utilizacao.pergunta}</Text>
        <Picker
            selectedValue={dadosFormulario.utilizacaoCircuito}
            onValueChange={(itemValue, itemIndex) => atualizarValor("utilizacaoCircuito", itemValue)}
        >
            {textos.utilizacao.respostas.map((resposta, index) => (
                <Picker.Item key={resposta.display} label={resposta.display} value={resposta.campo} />
            ))}
        </Picker>
        
        <Text style={estilos.enunciado}>{textos.instalacao.temperatura.pergunta}</Text>
        <InputSpinner
            max={80}
            min={0}
            step={5}
            color="#FF8F5C"
            value={dadosFormulario.temperaturaAmbiente}
            onChange={(itemValue, itemIndex) => atualizarValor("temperaturaAmbiente", itemValue)}
        />
    </KeyboardAwareScrollView>
}