// * Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(valor => valor * 2)
// function callbackFunc(valor, indice, array){
//     return valor * 2
// }
console.log(numerosEmDobro)

// * Para cada elemento:
// * Retorne apenas uma string com o nome da pessoa
const pessoas = [
    { nome: 'Nícolas', idade: 18 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

// * Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => obj.idade)
console.log(idades)

// * Adicione uma chave id em cada objeto
const comIds = pessoas.map((obj, i) => {
    const newObj = {...obj}
    newObj.id = i + 1;
    return newObj
})
console.log(comIds)


