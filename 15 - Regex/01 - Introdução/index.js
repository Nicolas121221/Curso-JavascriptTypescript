// g - global (encontra todas as ocorrências) /João/g
// i - insensitive (Case Insensitive) /joão/i

// () - grupo
// | ou

const { texto } = require("../base");

const regExp1 = /(maria)(, hoje sua esposa)/gi;
const found = regExp1.exec(texto)

console.log(regExp1.exec(texto));
console.log(found[0])
console.log(found[1])
console.log(found[2])

const regExp2 = /(maria | joão)(, hoje sua esposa)/gi
console.log(regExp2.exec(texto))
