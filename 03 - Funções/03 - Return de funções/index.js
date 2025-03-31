// return - retorna um valor terminando a função 

function soma(a,b){
    return a+b
};

console.log(soma(5,2));

function soma2(a,b){
    console.log(a+b)
};

function criaPessoa(nome,sobrenome){
    return{nome,sobrenome};
};

const p1 = criaPessoa('Nícolas', 'Guedes');
const p2 = {
    nome: 'Nícolas',
    sobrenome: 'Guedes'
};

console.log(p1, p2)

function falaFrase(comeco){
    function falaResto (resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo'))

function duplica (n){
    return n * 2
}
function triplica (n){
    return n * 3
}
function quadriplica (n){
    return n * 4
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

function criaMultiplicador(multiplicador){
    function multiplicacao(n){
        return n* multiplicador;
    }
    return multiplicacao
}

let duplicaf = criaMultiplicador(2);
let triplicaf = criaMultiplicador(3);
let quadriplicaf = criaMultiplicador(4)

console.log(duplicaf(2))
console.log(triplicaf(2))
console.log(quadriplicaf(2))
