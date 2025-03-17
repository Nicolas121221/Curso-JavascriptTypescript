// For clássico

/*

console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

*/

// 1º - Criar uma variavel 
// 2º - Definir uma condição
// 3º - Incrementar a variavel

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva']
console.log(frutas.length)

for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`,frutas[i])
}
