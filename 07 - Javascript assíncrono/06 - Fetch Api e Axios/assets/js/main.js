// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => carregaElementos(json));

axios('pessoas.json')
    .then(response => carregaElementos(response.data));

function carregaElementos(json) {
    const table = document.createElement('table')
    const tr = document.createElement('tr')

    tr.classList.add('table-head')

    function criaElemento(conteudo) {
        let td = document.createElement('td');
        td.innerHTML = conteudo;
        tr.appendChild(td);
    }

    criaElemento('nome')
    criaElemento('email')
    criaElemento('salario')
    criaElemento('empresa')
    criaElemento('idade')
    criaElemento('sexo')
    criaElemento('cpf')

    table.appendChild(tr)

    for (let pessoa of json) {
        const tr = document.createElement('tr')

        function criarTd(chaveValor) {
            let td = document.createElement('td')
            td.innerHTML = chaveValor;
            tr.appendChild(td)
        }

        criarTd(pessoa.nome)
        criarTd(pessoa.email)
        criarTd(pessoa.salario)
        criarTd(pessoa.empresa)
        criarTd(pessoa.idade)
        criarTd(pessoa.sexo)
        criarTd(pessoa.cpf)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
}


