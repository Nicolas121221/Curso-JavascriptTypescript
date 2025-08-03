const { texto, arquivos } = require("../base");

// * (opicionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ caractere de escape
// {n, m} => mínimo e máximo
// {10,} => no mínimo 10
// {0,10} => de 0 a 10

// console.log(texto.match(/Jo+ão+/gi));

console.log(texto.match(/Jo+ão+/gi));

for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(/(\.)(jpe?g|png)/gi));
}

for (const arquivo of arquivos) {
  const valido = arquivo.match(/\.(jpe?g|png)/gi);

  if (!valido) continue;
  console.log(arquivo, valido);
}
