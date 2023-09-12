// imagens
import logo from "../../../assets/icon.png";
import imagemCabeamento from "../../../assets/fiacao.png";
import imagemCondutos from "../../../assets/condutos.png";
import imagemDisjuntores from "../../../assets/disjuntores.png";
import imagemCalculos from "../../../assets/teoria.png";

const textos = {
    topo: {
        imagemLogo: logo,
        nomeApp: "Solução Elétrica",
        boasVindas: "Bem Vindo!",
        instrucoes: "Escolha abaixo o cálculo que deseja realizar.",
    },
    opcoes: [
        {
            imagem: imagemCabeamento,
            descricaoBotao: "Dimensionar \nCabeamento",
        }, 
        {
            imagem: imagemDisjuntores,
            descricaoBotao: "Dimensionar \nDisjuntores",
        }, 
        {
            imagem: imagemCondutos,
            descricaoBotao: "Dimensionar \nCondutos",
        },
        {
            imagem: imagemCalculos,
            descricaoBotao: "Base\nTeórica",
        }
    ]
}

export default textos;