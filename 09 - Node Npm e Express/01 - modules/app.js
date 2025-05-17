// const mod1 = require('./mod1');
const path = require('path')
const { nome, sobrenome, falaNome } = require('./mod1')
const {Pessoa} = require('./mod1')

const p1 = new Pessoa('Nícolas')
console.log(falaNome());