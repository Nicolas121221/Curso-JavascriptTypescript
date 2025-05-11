const nome = 'Nícolas';
const sobrenome = 'Guedes';
const idade = 18;

function soma(x, y) {
    return x + y;
};

export { nome, sobrenome, idade, soma }
// export { nome as nome2, sobrenome, idade , soma}

// export const nome = 'Nícolas';
// export const sobrenome = 'Guedes';
// export const idade = 18;

// export function soma(x, y) {
//     return x + y;
// };

export default class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export {nome as default, sobrenome, idade, soma,}