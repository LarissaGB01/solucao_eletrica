<h1 align="center"> Solução Elétrica </h1>
<h4 align="center">Projeto destinado a ser o frontend para uma solução de cálculo de dimensionamento de cabos, disjuntores e condutos</h4>
<p>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge" alt="Badge em Desenvolvimento">
</p>


:woman_technologist:
[Larissa Galvão Barcelos](https://github.com/LarissaGB01)


<h2> Indice </h2>

- [Contextualização do projeto](#contextualização-do-projeto)
- [Documentação Teórica](#documentação-teórica)
- [Rodando o projeto](#rodando-o-projeto)
- [Fonte das Imagens](#fonte-das-imagens)
- [Configuração local](#configuração-local)
  - [API](#api)

## Contextualização do projeto

Trabalho de Conclusão de Curso (TCC) apresentado como um dos requisitos para a conclusão do curso de Engenharia Elétrica do UniCEUB – Centro Universitário de Brasília.

**DESENVOLVIMENTO DE APLICATIVO PARA DIMENSIONAMENTO DE CABOS, DISJUNTOR E ELETRODUTO VERSÃO ANDROID**

Orientador (a): Luciano Henrique Duque

Desenvolvedor (a): Larissa Galvão Barcelos

Maiores informações sobre o contexto do trabalho e o objetivo do mesmo estão disponíveis [aqui](docs/introducaoTCC.md).
<p align="center">Brasília, 2023</p>

## Documentação Teórica

A lógica útilizada para a realização dos cálculos presentes nessa aplicação e um exemplo de utilização dos mesmos foram documentados [nesse pdf](docs/passo_a_passo.pdf), disponível para consulta.

É importante mencionar que o dimensionamento de condutores é feito com base no cálculo da seção mínima do condutor. Todos os cálculos são baseados na norma NRB5410 e nas teorias sobre o assunto de dimensionamento publicadas até o dia 21/09/2023.

## Rodando o projeto

O projeto foi construido utilizando expo e react native, logo para rodar o projeto utilize os seguintes comandos:

```
npm install
```

```
npm start
```

## Fonte das Imagens
- As imagens desse projeto foram geradas via [Dream.ia](https://dream.ai/create)

## Configuração local

### API
Para que o projeto realize as requisições para a API definida é necessário a realização da configuração dos dados de conexão. Atenção aos seguintes pontos:

* Clonagem projeto backend para disponibilização dos endpoints localmente: clone o projeto e siga as instruções disponíveis [nesse repositório](https://github.com/LarissaGB01/solucao_eletrica_backend/blob/main/README.md#configura%C3%A7%C3%A3o-local)
* Configurações de conexão: devem ser atualizadas [nesse arquivo](src/config/apiConfig.js)