// ? definProperty - defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false,
        }
    })
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // ! mostra a chave.
        value: estoque, // ! valor da chave.
        writable: false, // ! pode alterar o valor ou não.
        configurable: false, // ! Pode apagar a chave ou mudar as configurações da chave.
    })
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1);

console.log(Object.keys(p1))