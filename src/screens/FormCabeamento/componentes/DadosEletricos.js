import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import textos from "../../../auxiliares/FormCabeamento/textos";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import estilos from "../../../auxiliares/FormCabeamento/estilos";

export default function DadosEletricos({ dadosFormulario, atualizarValor }) {
    const [tipoPotencia, setTipoPotencia] = useState(textos.eletrico.potencia.medidas[0]);

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
            <Text style={estilos.enunciado}>{textos.eletrico.tensao.descricao}</Text>
            <View style={estilos.espacoPreenchimento}>
                <TextInput
                    defaultValue="0"
                    maxLength={5}
                    keyboardType="numeric"
                    style={estilos.entradaTexto}
                    onChangeText={(number) => {
                        atualizarValor("voltagem", number);
                    }}>
                </TextInput>
                <View style={estilos.linhaPreenchimento}/>
            </View>
            <Text style={estilos.resposta}>{textos.eletrico.tensao.medida}</Text>
        </View>

        <SegmentedControl
            values={textos.eletrico.potencia.medidas.map(medida => medida.potencia)}
            onChange={(event) => {
                atualizarValor("potenciaAtiva", 0);
                atualizarValor("fatorDePotencia", 0);
                atualizarValor("potenciaAparente", 0);
                setTipoPotencia(textos.eletrico.potencia.medidas[event.nativeEvent.selectedSegmentIndex].potencia);
            }}
        />

        {tipoPotencia === textos.eletrico.potencia.medidas[0].potencia && (
            <View style={estilos.enunciadoComposto}>
                <Text style={estilos.enunciado}>{textos.eletrico.potencia.descricao}</Text>
                <View style={estilos.espacoPreenchimento}>
                    <TextInput
                        defaultValue="0"
                        maxLength={6}
                        keyboardType="numeric"
                        style={estilos.entradaTexto}
                        onChangeText={(number) => {
                            atualizarValor("potenciaAparente", number);
                        }}>
                    </TextInput>
                    <View style={estilos.linhaPreenchimento}/>
                </View>
                <Text style={estilos.resposta}>{textos.eletrico.potencia.medidas[0].unidade}</Text>
            </View>
        )}

        {tipoPotencia === textos.eletrico.potencia.medidas[1].potencia && (
            <View>
                <View style={estilos.enunciadoComposto}>
                    <Text style={estilos.enunciado}>{textos.eletrico.potencia.descricao}</Text>
                    <View style={estilos.espacoPreenchimento}>
                        <TextInput
                            defaultValue="0"
                            maxLength={6}
                            keyboardType="numeric"
                            style={estilos.entradaTexto}
                            onChangeText={(number) => {
                                atualizarValor("potenciaAtiva", number);
                            }}>
                        </TextInput>
                        <View style={estilos.linhaPreenchimento}/>
                    </View>
                    <Text style={estilos.resposta}>{textos.eletrico.potencia.medidas[1].unidade}</Text>
                </View>
                <View style={[estilos.enunciadoComposto, { marginVertical: 0, marginBottom: 30 }]}>
                    <Text style={[estilos.enunciado, { marginVertical: 0 }]}>{textos.eletrico.potencia.descricaoFatorPotencia}</Text>
                    <View style={estilos.espacoPreenchimento}>
                        <TextInput
                            defaultValue="0"
                            maxLength={6}
                            keyboardType="numeric"
                            style={estilos.entradaTexto}
                            onChangeText={(number) => {
                                atualizarValor("fatorDePotencia", number);
                            }}>
                        </TextInput>
                        <View style={estilos.linhaPreenchimento}/>
                    </View>
                </View>
            </View>
        )}
    </View>
}