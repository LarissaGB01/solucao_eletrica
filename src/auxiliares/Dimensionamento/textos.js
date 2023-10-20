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
        dados: [
            'Diâmetro nominal ',
        ]
    }, 
    respostaFinalDisjuntores: { 
        imagem: imagemDisjuntores,
        descricaoBotao: "Disjuntor Sugerido",
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