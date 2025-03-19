const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000
// const data = new Date(); //01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3, 20, 15, 14, 17, 500); //a, m, d, h , M, s, ss
// const data = new Date('2019-04-20 20:20:59')

// const data = new Date("2019-04-20 20:20:59.100")
// console.log('Dia', data.getDate()) // 0 - Janeiro, 11 - Dezembro
// console.log('Mês', data.getMonth())
// console.log('Ano', data.getFullYear())
// console.log('Horas', data.getHours())
// console.log('Minutos', data.getMinutes())
// console.log('Segundos', data.getSeconds())
// console.log('Miléssimos de Segundo', data.getMilliseconds())
// console.log('Día da semana', data.getDay()) // 0 - Domingo, 6 - Sábado

// console.log(data.toString())

// console.log(Date.now())

function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)