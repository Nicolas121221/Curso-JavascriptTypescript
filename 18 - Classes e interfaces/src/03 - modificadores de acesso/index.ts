// método public é acessivel em qualquer instancia da classe;
// private só é acessível na classe que foi criada;

export class Empresa {
	public nome: string; // ! public não é necessário
	private readonly colaboradores: Colaborador[] = [];
	protected readonly cnpj: string;

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

export class Colaborador {
	constructor(
		public readonly nome: string, // no atalho modificadores de acesso são obrigatórios
		public readonly sobrenome: string,
	) {}
}

const empresas: Empresa[] = [new Empresa("Microsoft", "04.712.500/0001-07")];
const colaboradores: Colaborador[] = [new Colaborador("Nicolas", "Guedes")];
colaboradores.push(new Colaborador("Bill", "Gates"));
colaboradores.push(new Colaborador("mark", "Zuckerberg"));
colaboradores.push(new Colaborador("Elon", "Musk"));

colaboradores.forEach((colaborador) => {
	empresas[0].adicionaColaborador(colaborador);
});

empresas.forEach((empresa) => {
	console.log(empresa.nome);
});

empresas[0].mostrarColaboradores();
