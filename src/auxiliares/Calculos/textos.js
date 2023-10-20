import imagemFatorTemperatura from "../../assets/tabelaTemperatura.png";
import imagemSecaoCondutorPVC from "../../assets/tabelaCondutores1.png";
import imagemSecaoCondutorEPR from "../../assets/tabelaCondutores2.png";
import imagemCabeamento from "../../assets/fiacao.png";
import imagemCondutos from "../../assets/condutos.png";
import imagemDisjuntores from "../../assets/disjuntores.png";
import imagemDisjuntorSiemens from "../../assets/tabelaDisjuntor.png";
import imagemEletrodutoCanaflex from "../../assets/tabelaEletroduto.jpg";

const textos = {
    tituloDados: 'Dados Informados',
    tituloDadosCalculados: 'Dados Calculados',
    tituloCondutorRecomendado: 'Condutor Recomendado',

    variaveis: {
        comprimentoCabo: 'l_{\\text{cabo}}',
        fatorPotencia: 'FP',
        potenciaAparente: 'P_{\\text{aparente}}',
        potenciaAtiva: 'P_{\\text{ativa}}',
        quantidadeCircuitos: 'Q_{\\text{circuitos}}',
        temperatura: 'T_{\\text{ambiente}}',
        tensao: 'V',
        correnteCircuito: 'I_{\\text{circuito}}',
        correnteProjeto: 'I_{\\text{projeto}}',
        fatorAgrupamento: 'FA',
        fatorTemperatura: 'FT',
        resisitividadeCabo: '\\rho',
        variacaoTensao: '\\Delta V_{\\text{c}}',
        secaoCondutor: 'S_{\\text{c}}',
        secaoNominal: 'S_{\\text{nominal}}',
        correnteMaxima: 'I_{\\text{maxima}}',
        correnteNominal: 'I_{\\text{nominal}}',
        diametroCondutor: 'd_{\\text{condutor}}',
        diametroEletroduto: 'd_{\\text{eletroduto}}',
    },

    unidadesMedida: {
        distancia: 'm',
        diametro: 'mm',
        potenciaAparente: 'VA',
        potenciaAtiva: 'W',
        temperatura: '°C',
        voltagem: 'V',
        corrente: 'A',
        resistividade: 'Ω/m',
        percentual: '%',
        secao: 'mm²',
    },

    etapasCalculos: [
        'Potência Aparente = ',
        'Corrente Circuito = ',
        'Fator Agrupamento = ',
        'Fator Temperatura = ',
        'Corrente Projeto = ',
        'Resistividade condutor = ',
        'Queda de tensão = ',
        'Seção mínima condutor = ',
        'Seção nominal ',
        'Capacidade de condução ',
        'Nome ',
        'Corrente nominal ',
        'Diametro Condutor = ',
        'Diâmetro Mínimo Eletroduto = ',
        'Diâmetro Nominal ',
    ],
    
    tabelas: {
        fatorTemperatura: {
            dados: [
                'Temperatura Ambiente = ',
                'Isolação = ',
            ],
            imagem: imagemFatorTemperatura,
            fonte: 'Fonte: NBR5410'
        },
        secaoCondutor: {
            dados: [
                'Método de referência = ',
                'Número de condutores carregados = ',
                'Condutores = ',
                'Isolação = ',
                'Para uma corrente >= ',
                'Para uma sessão nominal >= ',
            ],
            imagemPVC: imagemSecaoCondutorPVC,
            imagemEPR: imagemSecaoCondutorEPR,
            fonte: 'Fonte: NBR5410'
        },
        disjuntorSiemens: {
            dados: [
                'Curva C ',
                'Monopolar (1P) ',
                'Bipolar (2P) ',
                'Tripolar (3P) ',
                'Corrente Nominal',
            ],
            imagem: imagemDisjuntorSiemens,
            fonte: 'Marca: Siemens'
        },
        eletrodutoCanaflex: {
            dados: [
                'Seção Nominal >= ',
            ],
            imagem: imagemEletrodutoCanaflex,
            fonte: 'Marca: Canaflex'
        },
    },
    valoresFixos: {
        resistividade: 'Para um cabo de ',
        variacaoTensao: 'Para um circuito de ',
        secaoMinima: 'Para um circuito de ',
        secaoMinimaComplemento: ' o mínimo aceito para a seção nominal do condutor é ',
        secaoMinimaConclusao: 'Logo, ',
    },
    respostaFinal: {
        imagem: imagemCabeamento,
        imagemDisjuntor: imagemDisjuntores,
        imagemEletroduto: imagemCondutos,
    }, 
}

export default textos;