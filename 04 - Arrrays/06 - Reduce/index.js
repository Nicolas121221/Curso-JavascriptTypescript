// * Some todos os números(reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);

// * Retorne um array com os pares(filter)
const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, [])

// * Retorne um array com o dobro dos valores (map)
const dobro = numeros.reduce((acumulador, valor) =>{
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(total, pares, dobro)

// * Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Nícolas', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
]

const maisVelha = pessoas.reduce((acumulador, obj) => {
    if(obj.idade > acumulador.idade)  return obj
    return acumulador
})
console.log(maisVelha)