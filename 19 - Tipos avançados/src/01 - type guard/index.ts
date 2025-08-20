export function add(a: unknown, b: unknown): string | number {
	if (typeof a === "number" && typeof b === "number") return a + b; // type Guard é verificar os tipos das variavéis
	return `${a}${b}`;
}

const soma = add(1, 2);
const concat = add("1", "2");

console.log(soma, concat);

type Pessoa = { tipo: "pessoa"; nome: string };
type Animal = { tipo: "animal"; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
	tipo: "pessoa" = "pessoa";
	constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
	// if('nome' in obj) console.log(obj.nome)
	// if (obj instanceof Aluno) console.log(obj.nome);

	switch (obj.tipo) {
		case "pessoa":
			console.log(obj.nome);
			return;
		case "animal":
			console.log("isso é um animal",obj.cor);
			return;
	}
}

mostraNome(new Aluno("Nícolas"));
mostraNome({tipo:'animal', cor:'Azul'});
