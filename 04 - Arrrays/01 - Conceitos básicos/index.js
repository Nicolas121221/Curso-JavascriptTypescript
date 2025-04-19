// const nomes = new Array('Nícolas','Maria','Eduardo')
//                 0        1        2
const nomes = ['Nícolas', 'Maria', 'Eduardo'];

// nomes[2] = 'joão';
// delete nomes[2];

const novo = [...nomes];
const removido = novo.pop();

console.log(nomes)
console.log(novo)
console.log(removido)

nomes.push('João');
nomes.push('Wallace');

const meuNome = 'Nícolas Guedes'
const arrayNome = meuNome.split(' ')
console.log(arrayNome)


// ! Métodos
// * shift
// * unshift
// * pop
// * push
// * slice
// * join
// * split