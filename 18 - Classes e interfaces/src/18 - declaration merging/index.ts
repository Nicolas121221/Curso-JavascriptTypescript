// declaration merging é quando são criadas duas interfaces com o mesmo nome, elas resultam em uma interface como os atributos e métodos identicos uma da outra;
interface Pessoa {
    nome:string
}

interface Pessoa {
    sobrenome:string
}

interface Pessoa{
    readonly enderecos: readonly string[];
}

interface Pessoa{
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Nícolas',
    sobrenome: 'Guedes',
    enderecos: ['Av. Brasil'],
    idade:30
}

console.log(pessoa)
