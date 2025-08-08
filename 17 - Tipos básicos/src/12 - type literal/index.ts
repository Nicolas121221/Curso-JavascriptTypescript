let x: number = 10;
x = 0b1010;

const y = 10;

let a: 100 = 100; // type literal - subtipo de number

let b = 200 as const;

const pessoa = {
	nome: "Nícolas" as const, // asserção
	sobrenome: "Guedes",
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul") {
	return cor;
}

console.log(escolhaCor("Vermelho"));

export default 1;
