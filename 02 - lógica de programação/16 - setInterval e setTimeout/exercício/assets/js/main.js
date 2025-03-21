const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let [hrs, min, seg] = [0, 0, 0]

function avaliarHora(hrs, min, seg){
    if (seg > 59) [seg, min] = [0, min++]
    if (min > 59) [min, seg] = [0, hrs++]
    if (hrs > 23) [seg, hrs, min] = [0, 0, 0]
    return `${hrs}:${min}:${seg}`
}

function timer(hrs, min, seg) {
    setInterval(() => {
        seg++
        relogio.innerHTML = avaliarHora(hrs, min, seg)
    }, 200)
}

iniciar.addEventListener('click', (evento) => {
    timer(hrs, min, seg)
})
pausar.addEventListener('click', (evento) => {
    alert('botão clickado')
})
zerar.addEventListener('click', (evento) => {
    alert('botão clickado')
})

