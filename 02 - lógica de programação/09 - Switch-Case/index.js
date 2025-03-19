const data = new Date("1987-04-21 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
switch (diaSemana) {
    case 0:
        return diaSemanaTexto = 'Domingo';
    case 1:
        return diaSemanaTexto = 'Segunda-Feira';
    case 2:
        return diaSemanaTexto = 'Terça-Feira';
    case 3:
        return diaSemanaTexto = 'Quarta-Feira';
    case 4:
        return diaSemanaTexto = 'Quinta-Feira';
    case 5:
        return diaSemanaTexto = 'Sexta-Feira';
    case 6:
        return diaSemanaTexto = 'Sábado';
    default:
        return diaSemana =''
}}

//  switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda-Feira';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça-Feira';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta-Feira';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta-Feira';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta-Feira';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;

//     default:
//         diaSemana =''
// }



// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo'
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-Feira';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça-Feira';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta-Feira';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta-Feira';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta-Feira';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = ""
// };

console.log(getDiaSemanaTexto(0))