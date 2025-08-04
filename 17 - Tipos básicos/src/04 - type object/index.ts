const objetoA = {
	chaveA: "Valor A",
	chaveB: "Valor B",
};
const objetoB: {
	readonly chaveA: string;
	chaveB: string;
	chaveC?: string;
	[key: string]: unknown;
} = {
	chaveA: "Valor A",
	chaveB: "Valor B",
};

objetoA.chaveA = "Outo valor";
objetoA.chaveB = "Outo valor";
objetoB.chaveF = "Nova chave";

console.log(objetoA, objetoB);
