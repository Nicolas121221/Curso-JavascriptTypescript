// ! Factory functions (função Fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // ? Getter
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // ! Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ")
            console.log(valor)
        },


        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,

        // ? Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Nícolas', 'Guedes', 1.80, 80);
console.log(p1.imc);
const p2 = criaPessoa('Maria', 'Joaquina', 1.59, 50);
console.log(p2.imc);

console.log(p1.fala('falando sobre JS'));

p1.nomeCompleto = 'Nícolas 121221'
console.log(p1.nome)
console.log(p1.sobrenome)
