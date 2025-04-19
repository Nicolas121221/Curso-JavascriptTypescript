// Retorne a soma do dobro de todos os pares 
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 2, 3, 5, 50, 80, 7, 11, 15, 22, 27]

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => {
        acumulador += valor
        return acumulador
    });

const numerosPares1 = numeros.reduce((ac,valor) => {
    if(valor%2===0) ac+=valor*2
    return ac
},0)

console.log(numerosPares, numerosPares1)