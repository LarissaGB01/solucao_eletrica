import imagemCabeamento from "../../assets/fiacao.png";
import imagemCondutos from "../../assets/condutos.png";
import imagemDisjuntores from "../../assets/disjuntores.png";

const textos = {
    botoesCalculos: 'Ver cálculos',
    erro: 'Erro inesperado. Tente novamente!',
    respostaFinalCabeamento: { 
        imagem: imagemCabeamento,
        descricaoBotao: "Condutor Sugerido",
        dados: [
            'Seção nominal ',
            'Capacidade de condução ',
        ]
    }, 
    respostaFinalCondutos: { 
        imagem: imagemCondutos,
        descricaoBotao: "Eletroduto Sugerido",
        naoEncontrado: "Desculpe, mas não encontrei eletroduto para os parâmetros fornecidos.",
        dados: [
            'Diâmetro nominal ',
        ]
    }, 
    respostaFinalDisjuntores: { 
        imagem: imagemDisjuntores,
        descricaoBotao: "Disjuntor Sugerido",
        naoEncontrado: "Desculpe, mas não encontrei disjuntor para os parâmetros fornecidos.",
        dados: [
            'Nome ',
            'Corrente nominal ',
            'Marca Siemens',
        ]
    }, 
    unidadesMedida: {
        corrente: 'A',
        secao: 'mm²',
        milimetro: 'mm',
    },
}

export default textos;