import imagemFatorTemperatura from "../../assets/tabelaTemperatura.png";
import imagemSecaoCondutorPVC from "../../assets/tabelaCondutores1.png";
import imagemSecaoCondutorEPR from "../../assets/tabelaCondutores2.png";
import imagemCabeamento from "../../assets/fiacao.png";

const textos = {
    tituloDados: 'Dados Informados',
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
    },
    unidadesMedida: {
        distancia: 'm',
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
        descricaoBotao: "Dimensionar \nCabeamento",
        navegacao: "FormCabeamento",
    }, 
}

export default textos;