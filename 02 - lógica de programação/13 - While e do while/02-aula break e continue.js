const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continua pra próxima iteração
// Para a execução do código

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o 2')
        continue;
    }

    console.log(numero);

    if(numero === 7 ){
        console.log('7 encontrado, saindo...')
        break;
    }
}