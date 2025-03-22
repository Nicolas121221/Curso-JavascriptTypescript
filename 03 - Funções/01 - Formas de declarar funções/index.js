// Declaração de função

function falaOi() {
    console.log('Oie');
};

falaOi();

// First-Class objects (Objetos de primeira classe)
// Function expression

const SouUmDado = function () {
    console.log('Sou Um Dado')
}
SouUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
};

executaFuncao(SouUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando')
    }
};

obj.falar();
