// const mod1 = require('./mod1');
const path = require('path')
const axios = require('axios')
const { nome, sobrenome, falaNome } = require('./mod')
const {Pessoa} = require('./mod')

const p1 = new Pessoa('Nícolas')
console.log(falaNome());

axios('https://jsonplaceholder.typicode.com/todos/')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))