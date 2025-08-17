// metodos estáticos podem ser acessados pelo construtor das classes(não sendo necessário instanciar as classes)
export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = "000.000.000-00"



	constructor(
		public nome: string,
		public sobrenome: string,
		public idade: number,
		public cpf: string,
	) {}

    metodoNormal():void{
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }

	static falaOi(): void {
		console.log("oi");
	}

	static criaPessoa(nome: string, sobrenome: string): Pessoa {
		return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao );
	}
}

const pessoa1 = new Pessoa("Nícolas", "Guedes", 18, "000.000.000-00");
const pessoa2 = Pessoa.criaPessoa("João", "Victor");

pessoa1.metodoNormal()
console.log(pessoa1, pessoa2);

Pessoa.falaOi();
