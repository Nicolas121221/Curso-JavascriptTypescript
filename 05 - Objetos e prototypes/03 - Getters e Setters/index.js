function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoquePrivado,
        set: (valor) => {
            if (typeof (valor) !== 'number') {
                throw new TypeError('type error')
            }
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            return nome = valor
        }
    }
}

const p1 = new Produto('camiseta', 20, 3)
p1.estoque = 1

const p2 = criaProduto('Algum produto')
console.log(p2.nome)
console.log(p1.estoque)