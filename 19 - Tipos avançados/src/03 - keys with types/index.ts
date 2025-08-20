type Veiculo = {
	marca: string;
	ano: number;
};

type Car = {
	brand: Veiculo["marca"]; // retorna o tipo que existe dentro da chave
	year: Veiculo["ano"];
	name: string;
};

const carro: Car = {
	brand: "ford",
	year: 2020,
	name: "ka",
};

console.log(carro);
