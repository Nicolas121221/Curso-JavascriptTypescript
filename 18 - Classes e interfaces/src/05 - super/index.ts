export class Pessoa {
	constructor(
		public nome: string,
		public sobrenome: string,
		private idade: number,
		protected cpf: string,
	) {}

	getIdade(): number {
		return this.idade;
	}

	getCpf(): string {
		return this.cpf;
	}

	getNomeCompleto(): string {
		return this.nome + " " + this.sobrenome;
	}
}

export class Aluno extends Pessoa {
	sala: string;

	constructor(
		nome: string,
		sobrenome: string,
		idade: number,
		cpf: string,
		sala: string,
	) {
		super(nome, sobrenome, idade, cpf);
        this.sala = sala
	}

	getNomeCompleto(): string {
		console.log("Fazendo algo antes");
		const result = super.getNomeCompleto();
		return result + " Heyyyyyyy!!";
	}
}
export class Cliente extends Pessoa {
	getNomeCompleto(): string {
		return "Isso vem do cliente: " + this.nome + " " + this.sobrenome;
	}
}

const pessoa = new Pessoa("Nicolas", "Guedes", 18, "000.000.000-00");

const aluno = new Aluno("Nicolas", "Guedes", 18, "000.000.000-00", "0001");
const cliente = new Cliente("Nicolas", "Guedes", 18, "000.000.000-00");

console.log(pessoa, aluno, cliente);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno)
