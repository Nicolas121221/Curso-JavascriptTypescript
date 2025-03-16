let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)

//                  0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, SegundoNumero] = numeros;

// console.log(primeiroNumero, SegundoNumero)

// ...rest, ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;

// console.log(um, dois);
// console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

//                        0          1          2
//                     0  1  2    0  1  2    0  1  2
const numerosArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = numerosArray;
const [lista1, lista2, lista3] = numerosArray;

console.log(seis);
console.log(lista3[2]);

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto)