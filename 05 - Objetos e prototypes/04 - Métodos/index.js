/*
? Object.values
? Object.entries
? Object.assign(des, any)
? Object.getOwnPropertyDescriptor(o, 'prop')
? ...(spread)

? Object.keys
? Object.freeze
? Object.defineProperties
? Object.defineProperty
*/

const produto = { nome: 'Caneca', preco: 1.8 }
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'outro valor'
})
const outraCoisa = {
    ...produto,
    material: 'porcelana'
};

const caneca = Object.assign({}, produto, { material: 'porcelana' })


console.log(outraCoisa)
console.log(Object.keys(produto))
console.log(Object.getOwnPropertyDescriptors(produto))
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values(produto)) // Object.entries para arrays