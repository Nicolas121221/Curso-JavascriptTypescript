// * Função construtora -> objetos
// * Função fábrica -> objetos
// * Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // ! Privadas ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {

    };
    
    // ! Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um Método');
    };
}

const p1 = new Pessoa('Nícolas', 'Guedes')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo();