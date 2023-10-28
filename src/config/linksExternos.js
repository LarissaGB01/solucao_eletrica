import { Linking } from 'react-native';

const abrirLink = (fonte) => {
  if (fonte === 'ABNT') {
    Linking.openURL('https://docente.ifrn.edu.br/jeangaldino/disciplinas/2015.1/instalacoes-eletricas/nbr-5410');
  } 
  if (fonte === 'SIEMENS') {
    Linking.openURL('https://assets.new.siemens.com/siemens/assets/api/uuid:5e2a000b-6c1f-43be-853e-1799db7956e2/catalogo-minidisjuntores-janeiro-2022-net.pdf');
  } 
  if (fonte === 'KANAFLEX') {
    Linking.openURL('https://www.kanaflex.com.br/novosite/arquivos/mt_6.pdf');
  }
};
  
export default abrirLink;