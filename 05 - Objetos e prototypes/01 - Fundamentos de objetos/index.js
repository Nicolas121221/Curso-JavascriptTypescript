// * Objetos Literais
// ? objetos tem corpo
// ? chave: valor

const pessoa = {
    nome: 'Nícolas',
    sobrenome: 'Guedes'
};

// ! notação de ponto
console.log(pessoa.nome)

// ! notação de colchete
console.log(pessoa['sobrenome'])

// * Objetos construtores
const pessoa1 = new Object();
pessoa1.nome = 'Nícolas';
pessoa1.sobrenome = 'Guedes';
pessoa1.idade = 19;

pessoa1.falarNome = function () {
    return `${this.nome} está falando seu nome`
};

pessoa1.getDataNacimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// delete pessoa1.nome;
console.log(pessoa1.getDataNacimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

// ! Factory Functions/ Constructor Functions / Classes

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Nícolas','Guedes')
console.log(p1)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Nícolas','Guedes')
Object.freeze(p2)  // * congela um objeto (torna uma constante as chaves)

console.log(p2)