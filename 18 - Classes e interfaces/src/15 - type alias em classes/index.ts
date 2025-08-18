// export abstract class TipoPessoa {
// 	protected abstract nome: string;
// 	protected abstract sobrenome: string;
// 	protected abstract nomeCompleto(): string;
// }

type TipoPessoa = {
	nome: string;
	sobrenome: string;
	nomeCompleto(): string;
};

type TipoNome = {
	nome: string;
};

type TipoSobrenome = {
	sobrenome: string;
};

type TipoNomeCompleto = {
	nomeCompleto: () => string;
};

class Pessoa1 implements TipoPessoa {
	constructor(public nome: string, public sobrenome: string) {}

	nomeCompleto(): string {
		return this.nome + " " + this.sobrenome;
	}
}

class Pessoa2 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
	constructor(public nome: string, public sobrenome: string) {}

	nomeCompleto(): string {
		return this.nome + " " + this.sobrenome;
	}
}

const pessoa1 = new Pessoa1("Nìcolas", "Guedes");
const pessoa2 = new Pessoa2("Nìcolas", "Guedes");

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());
