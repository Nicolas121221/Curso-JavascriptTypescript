function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad value')
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

// ? Promise.all, Promise.race Promise.resolve Promise.reject

const promises1 = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
    'outro valor'
]

Promise.all(promises1)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    });

const promises2 = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises2)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })


function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.resolve('página em Cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e));