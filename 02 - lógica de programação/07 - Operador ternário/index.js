// (condição) ? "Valor para verdadeior": "valor para falso";

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario>= 1000? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usurário VIP')
// }else {
//     console.log('Usuário Normal')
// }
