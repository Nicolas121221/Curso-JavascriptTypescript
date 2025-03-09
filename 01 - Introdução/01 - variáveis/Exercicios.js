const nome = "Nicolas";
const sobrenome = "Guedes";
const idade = 18;
const peso = 76;
const alturaEmM = 1.75;
let indiceMassaCorporal;
let anoNascimento = 2025 - idade;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e seu IMC é de ${indiceMassaCorporal} ${nome} ${sobrenome} nasceu em ${anoNascimento}.`);