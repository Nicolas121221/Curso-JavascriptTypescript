type Idade = number;

type Pessoa = {
	nome: string;
	idade: Idade;
	salario: number;
	corPreferida?: CorPreferida;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
	nome: "Nícolas",
	idade: 18,
	salario: 200_000, // 200_000
	corPreferida: "Azul",
};

console.log(pessoa);

export function setCorPreferida(pessoa:Pessoa, cor: CorPreferida): Pessoa{
    return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, "Verde"))
