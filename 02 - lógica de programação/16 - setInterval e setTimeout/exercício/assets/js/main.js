function myScope() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let seconds = 0
    let timer;

    function startTimer() {
        timer = setInterval(() => {
            seconds++
            relogio.innerHTML = setTimeInSeconds(seconds)
        }, 1000);
    }

    function setTimeInSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    iniciar.addEventListener('click', (evento) => {
        clearInterval(timer)
        startTimer();
        relogio.classList.remove('pausado')
    })
    pausar.addEventListener('click', (evento) => {
        clearInterval(timer)
        relogio.classList.add('pausado')
    })
    zerar.addEventListener('click', (evento) => {
        clearInterval(timer)
        seconds = 0
        relogio.innerHTML = '00:00:00'
        relogio.classList.add('pausado')
    })
}

myScope();
