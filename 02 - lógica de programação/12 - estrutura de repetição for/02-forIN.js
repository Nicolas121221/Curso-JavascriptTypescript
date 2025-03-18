//                0        1      2
const frutas = ['Pera', 'Maçã', 'Uva']

// For in -> lê os índices ou chaves do objeto
for(let indice in frutas){
    console.log(frutas[indice])
};

const pessoa = {
    nome: 'Nícolas',
    sobrenome: 'Guedes',
    idade: 18
};

for(let chave in pessoa){
    console.log(chave , pessoa[chave])
};


/* 
//  estrutura de repetição 'for' clássicas
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
};
    
*/

