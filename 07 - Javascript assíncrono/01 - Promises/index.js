function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad value');



        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

esperaAi('Conexão com o DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('buscando a base de dados', rand(1, 3))

    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Tratando os dados da Base', rand(1, 3))

    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe dados na tela')
    })
    .catch(error => {
        console.error("erro: ", error)
    });

console.log('Isso aqui será exibido antes de qualquer promise');