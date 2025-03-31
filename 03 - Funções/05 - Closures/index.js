// closure - fecha o escopo da função
// habilidade de acessar o escopo léxico
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
};

const funcao = retornaFuncao('Nícolas');
const funcao2 = retornaFuncao('Guedes');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())