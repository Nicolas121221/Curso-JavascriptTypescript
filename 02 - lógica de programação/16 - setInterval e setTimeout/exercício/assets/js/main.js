const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let [hrs, min, seg] = [0, 0, 0]

function avaliarHora(hrs, min, seg) {
    return `${adicionarZero(hrs)}:${adicionarZero(min)}:${adicionarZero(seg)}`
}

function adicionarZero(num) {
    if (num < 10) return `0${num}`;
    return num;
}

function iniciarTempo(hrs,min,seg) {
    setInterval(() => {
        seg++
        if (seg > 59) [seg, min] = [0, min += 1]
        if (min > 59) [min, hrs] = [0, hrs += 1]
        if (hrs > 23) [seg, hrs, min] = [0, 0, 0]
        relogio.innerHTML = avaliarHora(hrs, min, seg)
    }, 1000)

}

iniciar.addEventListener('click', (evento) => {
    iniciarTempo(hrs, min, seg)
})
pausar.addEventListener('click', (evento) => {
    clearInterval(iniciarTempo)
})
zerar.addEventListener('click', (evento) => {
    clearInterval(iniciarTempo)
    [hrs, min, seg] = [0, 0, 0]
    iniciarTempo()
})

