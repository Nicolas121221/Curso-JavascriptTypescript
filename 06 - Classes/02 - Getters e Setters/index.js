// Symbol
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('Settter')
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('Getter')
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 55
console.log(c1.velocidade)

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto (){
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift();
        this.sobrenome = valor.join();
    }
}

const p1 = new Pessoa('Nícolas', 'Guedes')
p1.nomeCompleto = 'Nícolas Guedes'
console.log(p1.nome, p1.sobrenome);
console.log(p1.nomeCompleto);