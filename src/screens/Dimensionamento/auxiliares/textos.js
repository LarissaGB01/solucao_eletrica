const textos = {
    titulo: "Dimensões do Circuito",
    descricao: "Informe abaixo os dados referentes ao seu projeto",
    finalidade: {
        pergunta: "Informe a finalidade desse circuito eletrico",
        respostas: [
            {
                nome: "Circuito de Distribuição"
            },
            {
                nome: "Circuito Terminal"
            }
        ]
    },
    utilizacao: {
        pergunta: "Informe a forma de utilização desse circuito",
        respostas: [
            {
                nome: "Circuito para TUGs"
            },
            {
                nome: "Circuito para iluminação"
            }
        ]
    },
    eletrico: {
        pergunta: "Informe dados eletricos desse circuito",
        fases: {
            monofasico: "Circuito Monofasico",
            bifasico: "Circuito Bifasico",
            trifasico: "Circuito Trifasico"
        },
        tensao: {
            medida: "Volts",
            descricao: "Tensao do Sistema"
        },
        potencia: {
            medidaAtiva: "Watts",
            medidaReativa: "VoltAmperes",
            descricao: "Potencia do Sistema",
            descricaoFatorPotencia: "Fator de Potencia"
        },
        circuitosAgrupados: {
            pergunta: "Informe a quantidade de circuitos agrupados"
        }
    }, 
    instalacao: {
        metodo: {
            pergunta: "Informe o metodo de instalacao da fiacao eletrica",
            respostas: {
                A1: "A1",
                A2: "A2",
                B1: "B1",
                B2: "B2"
            }
        },
        tipoCabo: {
            pergunta: "Informe o material do cabo utilizado",
            respostas: {
                pvc: "PVC",
                epr: "EPR",
                aluminio: "Aluminio", 
            }
        },
        comprimento: {
            pergunta: "Informe o comprimento do cabo",
            medida: "m",
        }
    },
    temperatura: {
        pergunta: "Informe a temperatura do ambiente de instalacao",
        medida: "Celsius"
    }
}

export default textos;