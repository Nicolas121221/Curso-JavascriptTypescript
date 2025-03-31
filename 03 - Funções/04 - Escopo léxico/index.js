//Escopo léxico - analise do escopo de uma função priorizando a função até chegar no escopo global
const nome = 'Nícolas';

function falaNome(){
    const nome = 'Guedes'
    console.log(nome)
}

falaNome();

function usaFalaNome(){
    falaNome();
};
usaFalaNome();