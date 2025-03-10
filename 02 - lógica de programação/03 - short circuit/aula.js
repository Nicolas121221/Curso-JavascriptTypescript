/*
    Operdores Lógicos
&&  -> false && false  -> false 'o valor mesmo'
||  -> true || false   -> vai retornar 'o valor verdadeiro'

*false
Falsy
0
'' "" ``
null / undefined
NaN

*/

console.log('Luiz' && true && 'Maria')

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false

console.log(vaiExecutar && falaOi())

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)

const a = 0;
const b = null;
const c = 'false'; // aqui
const d = false;
const e = NaN;

console.log(a || b || c || d || e)