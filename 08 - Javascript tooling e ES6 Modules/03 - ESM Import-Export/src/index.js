import Pessoa ,{ nome as nome2, sobrenome, idade, soma } from './modulo1.js'
import * as MeuModulo from  './modulo1.js'

const nome = 'João'

const pessoa = new Pessoa(nome, sobrenome)

console.log(nome, nome2, sobrenome, idade, pessoa)
console.log(soma(2, 5))
console.log(MeuModulo)

// import padrao from './modulo1.js' // importa o elemento default
// console.log(padrao)