const { texto } = require("../base");
const regExp1 = /João/gi;

// Representação de grupos

// ( ... )( ... )( ... )
//    $1     $2     $3

console.log(texto.match(/joão|maria/gi));
console.log(texto.replace(/joão/gi, "Felipe"));

console.log(texto.replace(/(joão|maria)/gi, "<b>$1</b>"));
console.log(
  texto.replace(/(joão|maria)/gi, function (input) {
    return input + ' #######'
  })
);
