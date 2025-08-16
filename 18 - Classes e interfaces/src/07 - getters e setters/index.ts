export class Pessoa {
	constructor(
		public nome: string,
		public sobrenome: string,
		private idade: number,
		protected _cpf: string,
	) {}

	get cpf(): string {
	    return this._cpf.replace(/\D/g, "");
	}

	set cpf(cpf: string) {
		this._cpf = cpf;
	}
}

const pessoa = new Pessoa("Nícolas", "Guedes", 18, "000.000.000-00");
pessoa.cpf = "000.000.000-99";
console.log(pessoa.cpf);
