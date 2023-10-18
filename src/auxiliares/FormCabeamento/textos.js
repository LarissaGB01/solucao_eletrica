const textos = {
    titulo: "Dimensões do Circuito",
    descricao: "Informe abaixo os dados referentes ao seu projeto",
    finalidade: {
        pergunta: "Informe a finalidade desse circuito",
        respostas: [
            {display: "Circuito de Distribuição", campo: "DISTRIBUICAO"},
            {display: "Circuito Terminal", campo: "TERMINAL"},
        ]
    },
    utilizacao: {
        pergunta: "Informe a forma de utilização desse circuito",
        respostas: [
            {display: "Circuito para TUGs", campo: "TOMADA"},
            {display: "Circuito para iluminação", campo: "ILUMINACAO"},
        ]
    },
    eletrico: {
        pergunta: "Informe dados elétricos desse circuito",
        fases: [
            {display: "Monofásico", campo: "MONOFASICO"},
            {display: "Bifásico", campo: "BIFASICO"},
            {display: "Trifásico", campo: "TRIFASICO"},
        ],
        tensao: {
            medida: "Volts",
            descricao: "Tensão:"
        },
        potencia: {
            medidas: [
                {unidade: "VoltAmperes", potencia: "APARENTE"},
                {unidade: "Watts", potencia: "ATIVA"},
            ],
            descricao: "Potência:",
            descricaoFatorPotencia: "Fator de Potência:"
        }
    }, 
    instalacao: {
        metodo: {
            pergunta: "Informe o método de instalação da fiação elétrica",
            respostas: [
                "A1",
                "A2",
                "B1",
                "B2",
                "C",
                "D"
            ]
        },
        tipoCabo: {
            pergunta: "Informe o material do cabo utilizado",
            respostas: [
                "PVC",
                "EPR",
                "ALUMINIO" 
            ]
        },
        comprimento: {
            pergunta: "Informe o comprimento do cabo em metros",
        },
        circuitosAgrupados: {
            pergunta: "Informe a quantidade de circuitos agrupados"
        },
        temperatura: {
            pergunta: "Informe a temperatura do ambiente de instalação em graus Celsius"
        }
    }
}

export default textos;