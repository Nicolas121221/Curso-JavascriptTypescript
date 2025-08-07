enum Cores {
	VERMELHO, // 0
	AZUL, // 1
	AMARELO, // 2
}

enum Cores {
	ROXO = "ROXO",
	VERDE = 201,
	ROSA,
}

enum Cores1 {
	VERMELHO = 10, // 10
	AZUL = 100, // 100
	AMARELO = 200, // 200
}

console.log(Cores.VERMELHO);
console.log(Cores["1"]);

console.log(Cores1);

function escolhaACor(cor: Cores): void {
	console.log(Cores[cor]);
}

escolhaACor(Cores.ROSA)
