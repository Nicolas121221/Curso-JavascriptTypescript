/*
    * Javascript é baseado em protótipos para passar propriedade e métodos de um objeto para outro

    ? Definição de protótipos
    ? Protótipo é o termo usado para se referir ao que fo criado pela primeira vez, servindo de modelo ou molde para futuras produções

    ! Todos os objetos tem um referência interna para um protótipo (_proto_) que vem da prorpiedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não)  tal membro. 
*/


// * construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

// * instância
const pessoa1 = new Pessoa('Nícolas', 'G.'); // <-- Pessoa = função construtora
const pessoa2 = new Pessoa('maria', 'A.'); // <-- Pessoa = função construtora
const data = new Date(); // <-- Data = função construtora



console.dir(pessoa1)
console.dir(data)



