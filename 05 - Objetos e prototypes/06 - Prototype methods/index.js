// ? new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
}

const objC = new Object();
Object.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.desconto(10)

console.dir(p1)
console.dir(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        enumerable: true,
        value: 42
    }
})

p3.aumento(20);
console.log(p3)