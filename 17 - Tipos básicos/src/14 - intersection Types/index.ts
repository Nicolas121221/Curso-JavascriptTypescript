// | - union type           por ser lido como "OR"
// & - intersection type    por ser lido como "AND"

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa1 = TemNome | TemSobrenome | TemIdade; // não é obrigatório todos somente 1
type Pessoa2 = TemNome & TemSobrenome & TemIdade; // todos são obrigatórios

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "A" | "D";
type Intersection = AB & AC & AD// funciona como a interseção de 2 conjuntos

const pessoa1: Pessoa1 = {
	idade: 18,
};

const pessoa2: Pessoa2 = {
	nome: "Nícolas",
	sobrenome: "Guedes",
	idade: 18,
};

console.log(pessoa1, pessoa2);
