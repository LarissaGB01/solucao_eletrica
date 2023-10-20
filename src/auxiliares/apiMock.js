const apiMock = {
    requisicao: {
        tipoCircuito: "DISTRIBUICAO",
        utilizacaoCircuito: "TOMADA",
        fasesVoltagem: "TRIFASICO",
        voltagem: 380,
        metodoInstalacao: "A1",
        tipoCabo: "ALUMINIO",
        potenciaAtiva: 12000,
        potenciaAparente: 0,
        fatorDePotencia: 0.8,
        temperaturaAmbiente: 50,
        quantidadeCircuitosAgrupados: 2,
        comprimentoFio: 60
    },
    resposta: {
        dadosDimensionados: {
          cabeamento: {
            correnteMaximaCondutor: 57.0,
            secaoNominalCondutor: 25.0,
            diametroExternoCaboRecomendado: 19.9,
            diametroNominalCaboRecomendado: 6.5
          },
          disjuntor: {
            correnteNominalDisjuntorRecomendado: 50,
            nomeDisjuntorRecomendado: "5SL1 350-7MB"
          },
          eletroduto: {
            diametroNominalEletrodutoSugeridoPolegadas: '1.1/4"',
            diametroNominalEletrodutoSugeridoMilimetros: 30,
            diametroExternoEletrodutoSugerido: 41.3,
            diametroInternoEletrodutoSugerido: 31.5
          }
        },
        dadosUtilizadosParaCalculo: {
          calculoSecaoCondutor: {
            calculoPotenciaAparente: {
              indicadorPotenciaAparenteInformada: false,
              potenciaAtiva: 12000,
              fatorDePotencia: 0.8,
              potenciaAparente: 15000
            },
            calculoCorrenteProjeto: {
              indicadorCircuitoTrifasico: true,
              potenciaAparente: 15000,
              voltagem: 380,
              correnteCircuito: 23,
              quantidadeCircuitosAgrupados: 2,
              fatorAgrupamento: 0.7071067811865475,
              temperaturaAmbiente: 50,
              isolacaoCabo: "PVC",
              fatorTemperatura: 0.71,
              correnteProjeto: 45
            },
            calculoDiametroMinimoCabo: {
              tipoCabo: "ALUMINIO",
              resistividadeCabo: 0.02857,
              tipoCircuito: "DISTRIBUICAO",
              indicadorCircuitoTrifasico: true,
              comprimentoFio: 60,
              correnteProjeto: 45,
              valorVariacaoTensao: 2,
              voltagem: 380,
              diametroCalculado: 17.5800877954020550435,
              utilizacaoCircuito: "TOMADA",
              minimoDiametroCabo: 2.5,
              indicadorMinimoDiametroUtilizado: false,
              fasesVoltagem: "TRIFASICO",
              cabosCarregados: 3,
              metodoInstalacao: "A1",
              materialCabo: "ALUMINIO",
              isolamentoCabo: "PVC"
            }
          },
          calculoDisjuntor: {
            fasesVoltagem: "TRIFASICO",
            cabosCarregados: 3,
            correnteProjeto: 45,
            correnteMaximaCabo: 57.0
          },
          calculoEletroduto: {
            secaoNominalCabo: 25.0,
            diametroCabo: 5.639148871948674,
            quantidadeCondutores: 2,
            diametroMinimoCalculado: 28.195744359743365
          }
        }
    },
}

export default apiMock;