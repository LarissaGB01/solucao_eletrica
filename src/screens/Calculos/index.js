import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { MathJax, MathJaxProvider } from "react-native-mathjax";

export default function Calculos({ route, navigation }) {
    const { resposta } = route.params.dados; // Obtém a resposta passada como parâmetro

    return (
        <ScrollView
            contentContainerStyle={styles.container}
        >
            <MathJaxProvider>
                <MathJax
                    math={`potenciaAparente = potenciaAtiva * fatorDePotencia`}
                    html
                    // A propriedade `html` permite que a equação se ajuste automaticamente
                    style={styles.mathJax}
                />
            </MathJaxProvider>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mathJax: {
        // Estilo adicional, se necessário
    },
});
