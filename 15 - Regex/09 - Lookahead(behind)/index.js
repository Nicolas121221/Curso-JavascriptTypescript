const { lookahead } = require("../base");

console.log(lookahead);
// console.log(lookahead.match(/.+?[^in]active/gim));

// Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^în]active)/gim))

// Positive lookahead (frases que tem inactive)
console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// Negative lookahead (frases que não tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Negative lookahead (frases que não tem inactive)
console.log(lookahead.match(/^(?!.+inactive).+$/gim))

// Positive lookbehind (frases que começam com online)
console.log(lookahead.match(/(?<=ONLINE\s+).*/gim))

// Negative lookbehind (frases que não começam com online)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
012.250.796-10
000.000.000-00
111.111.111-11
222.222.222-22
333.333.333-33
444.444.444-44
999.999.999-99
127.285.963-10
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))
