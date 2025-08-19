// interface e type alias são quase identicos

interface TipoNome {
	nome: string;
}

interface TipoSobrenome {
	sobrenome: string;
}

interface TipoNomeCompleto {
	nomeCompleto: () => string;
}

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {} // extensão entre interface funciona como extensão de classes

export class Pessoa implements TipoPessoa2 {
	constructor(public nome: string, public sobrenome: string) {}

	nomeCompleto(): string {
		return this.nome + " " + this.sobrenome;
	}
}

const pessoaObj: TipoPessoa2 = {
	nome: "Nícolas",
	sobrenome: "Guedes",
	nomeCompleto() {
		return this.nome + " " + this.sobrenome;
	},
};

const pessoa = new Pessoa("Nícolas", "Guedes");

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
