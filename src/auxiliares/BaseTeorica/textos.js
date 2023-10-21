import imagemFatorTemperatura from "../../assets/tabelaTemperatura.png";
import imagemSecaoCondutorPVC from "../../assets/tabelaCondutores1.png";
import imagemSecaoCondutorEPR from "../../assets/tabelaCondutores2.png";
import imagemDisjuntorSiemens from "../../assets/tabelaDisjuntor.png";
import imagemEletrodutoKanaflex from "../../assets/tabelaEletroduto.jpg";

const textos = {
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
        correnteMaxima: 'I_{\\text{maximaCabo}}',
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
        'Potência Aparente',
        'Corrente Circuito',
        'Fator Agrupamento',
        'Fator Temperatura',
        'Corrente Projeto',
        'Resistividade Condutor',
        'Queda de Tensão',
        'Seção Mínima Condutor',
        'Recomendação Condutor',
        'Corrente Nominal Disjuntor',
        'Recomendação Disjuntor',
        'Diametro Condutor',
        'Diâmetro Mínimo Eletroduto',
        'Recomendação Eletroduto',
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
        eletrodutoKanaflex: {
            dados: [
                'Seção Nominal >= ',
            ],
            imagem: imagemEletrodutoKanaflex,
            fonte: 'Marca: Kanaflex'
        },
    },

    valoresVariaveis: {
        tensao: [
            'Em caso de circuitos TRIFÁSICOS',
            'Em caso de circuitos NÃO TRIFÁSICOS'
        ],
        resistividade: [
            'Para um cabo de ALUMÍNIO',
            'Para um cabo de COBRE',
        ],
        variacaoTensao: [
            'Para um circuito de DISTRIBUIÇÃO',
            'Para um circuito TERMINAL'
        ],
        minimoSecao: {
            inicio: 'Para um circuito de',
            complemento: ' o mínimo aceito para a seção nominal do condutor é',
        }
    }, 
}

export default textos;