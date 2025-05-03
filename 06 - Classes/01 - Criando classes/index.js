class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comer`)
    }

    beber() {
        console.log(`${this.nome} está beber`)
    }
}

function Pessoa2 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Nícolas', 'Guedes');
const p2 = new Pessoa('João', 'J.');
const p3 = new Pessoa('Nathan', 'U.');
const p4 = new Pessoa('Ruan', 'T.');

