export class Empresa {
	public nome: string; // ! public não é necessário
	protected readonly colaboradores: Colaborador[] = []; // protected pode ser acessado na subclasse
	private readonly cnpj: string;

	constructor(nome: string, cnpj: string) {
		this.nome = nome;
		this.cnpj = cnpj;
	}

	public adicionaColaborador(colaborador: Colaborador): void {
		this.colaboradores.push(colaborador);
	}

	public mostrarColaboradores(): void {
		for (const colaborador of this.colaboradores) {
			console.log(colaborador);
		}
	}
}

export class Udemy extends Empresa {
    constructor(){
        super('Udemy','111-111-111/0001-11')
    }

    popColaborador():Colaborador | null{
        const colaborador = this.colaboradores.pop();
        if(colaborador) return colaborador
        return null
    }
}

export class Colaborador {
	constructor(
		public readonly nome: string,
		public readonly sobrenome: string,
	) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador("Nícolas", "Guedes");
const colaborador2 = new Colaborador("Maria", "Eduarda");
const colaborador3 = new Colaborador("João", "Vieira");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido)
console.log(empresa1);
