function semRetorno(...args: string[]): void {
	console.log(args.join(" "));
}

const pessoa = {
	nome: "nícolas",
	sobrenome: "Guedes",
	exibirNome(): void {
		console.log(this.nome + " " + this.sobrenome);
	},
};

semRetorno("Nícolas", "Guedes");
pessoa.exibirNome();

export { pessoa };
