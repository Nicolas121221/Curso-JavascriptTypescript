type CoresObj = typeof coresObj;

const coresObj = {
	vermelho: "red",
	verde: "green",
	azul: "blue",
	roxo: "purple",
};

function traduzirCor(cor: keyof CoresObj, cores: CoresObj) {
	return cores[cor];
}

console.log(traduzirCor("vermelho", coresObj));
console.log(traduzirCor("verde", coresObj));
console.log(traduzirCor("roxo", coresObj));
