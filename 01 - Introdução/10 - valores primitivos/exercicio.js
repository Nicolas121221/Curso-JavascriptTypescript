function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    function adicionarPessoas(nome, sobrenome, peso, altura) {
        pessoas.push({ nome, sobrenome, peso, altura })
        console.log(pessoas)
        resultado.innerHTML += `<p>Nome: ${nome}<br>Sobrenome: ${sobrenome}<br>Peso: ${peso}<br>Altura: ${altura}</p>`
    };

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        adicionarPessoas(nome.value, sobrenome.value, peso.value, altura.value);
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

