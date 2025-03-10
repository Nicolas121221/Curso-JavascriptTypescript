/*
    Operdores Lógicos
&&  -> AND  ->  E   
||  -> OR   ->  OU  
!   -> NOT  ->  Não 

*/

const expresaoAND = true && true && true && true;
const expressaoOR = true || false;

const usuario = 'Luiz'; //form usuário digiou
const senha = '123456'; // form usuário digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456'

console.log(vaiLogar)

console.log(!false)
