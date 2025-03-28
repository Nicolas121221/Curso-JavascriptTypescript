// ? envia um argumento para um parâmetro dentro de uma função, todos são separados por vírgula
// ? todos os argumentos lançados em uma função são guardados em uam variavel chamada "!argumets"
// ! funciona somente para funções declaradas com a palavra function
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ! os paramêtros não definidos tem o valor de undefined
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao2(1, 2, 3)

// ? um valor padrão pode ser atribuido a um número caso não tenha um argumento
function funcao3(a, b = 2) {
    console.log(a + b)
};

funcao3(1);

// ! rest operator é um parâmetro que recebe todos os argumentos restantes utilizando o opearador "..." antes do parâmetro 
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if(operador ==="+") acumulador += numero
        if(operador ==="-") acumulador -= numero
        if(operador ==="/") acumulador /= numero
        if(operador ==="*") acumulador *= numero
        
        console.log(acumulador)
    }
};
conta('+', 0, 20, 30, 40, 50)
