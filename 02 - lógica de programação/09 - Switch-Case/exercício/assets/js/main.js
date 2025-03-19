function meuEscopo() {
    const h1 = document.querySelector('h1')

    const data = new Date();
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    function getDiaSemanaTexto(diaSemana) {
        switch (diaSemana) {
            case 0:
                return 'Domingo'
            case 1:
                return 'Segunda-feira'
            case 2:
                return 'Terça-feira'
            case 3:
                return 'Quarta-feira'
            case 4:
                return 'Quinta-feira'
            case 5:
                return 'Sexta-feira'
            case 6:
                return 'Sábado'
            default:
                return ''
        }
    }

    function getMes(mes) {
        switch (mes) {
            case 0:
                return 'Janeiro'
            case 1:
                return 'Fevereiro'
            case 2:
                return 'Março'
            case 3:
                return 'Abril'
            case 4:
                return 'Maio'
            case 5:
                return 'Junho'
            case 6:
                return 'Julho'
            case 7:
                return 'Agosto'
            case 8:
                return 'Setembro'
            case 9:
                return 'Outubro'
            case 10:
                return 'Novembro'
            case 11:
                return 'Dezembro'

            default:
                return ''
        }
    }

    h1.innerHTML = `${getDiaSemanaTexto(diaSemana)}, ${dia} de ${getMes(mes)} de ${ano} ${hora}:${min}`
}

meuEscopo()

