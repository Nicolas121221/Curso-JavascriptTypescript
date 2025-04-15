// * IIFE -> Immediately invoked function expression

function qualquerCoisa() {
    console.log(111234555)
}
qualquerCoisa();

(function () {
    console.log(123456)
})();

(function () {
    const nome = "Nícolas";
    console.log(nome)
})();

const nome = "qualquer coisa";

(function (idade, peso, altura) {
    const sobrenome = "Guedes";
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }
    function falaNome() {
        console.log(criaNome('Nícolas'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80);