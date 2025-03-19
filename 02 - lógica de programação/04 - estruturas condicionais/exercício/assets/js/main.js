function meuEscopo() {

    const form = document.querySelector('#formulario')
    const resultadohtml = document.querySelector('.final')

    function recebeEnvento(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const resultado = calcularIMC(peso, altura)
        console.log(resultado)
        resultadohtml.innerHTML = `<p>O seu imc é de ${resultado[0]} e o seu tipo é ${resultado[1]}</p>`
    }
    function calcularIMC(peso, altura) {
        peso = parseFloat(peso.value)
        altura = parseFloat(altura.value)

        let resultado = "Obesidade grau III"
        let imc = (peso / (altura * altura)).toFixed(2)
        if (peso === NaN || altura === NaN) {
            return ('Erro você inseriu um valor errado')
        } else if (imc < 18.5) {
            resultado = "Abaixo do peso"
        } else if (imc < 25) {
            resultado = "Peso normal"
        } else if (imc < 30) {
            resultado = "Sobrepeso"
        } else if (imc < 35) {
            resultado = "Obesidade grau I"
        } else if (imc < 45) {
            resultado = "Obesidade grau II"
        }
        return [[imc], [resultado]]
    }
    form.addEventListener('submit', recebeEnvento)

}

meuEscopo()