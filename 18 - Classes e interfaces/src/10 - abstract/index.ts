export abstract class Personagem {
    protected abstract emoji:string;

	constructor(
		protected nome: string,
		protected ataque: number,
		protected _vida: number,
	) {}

    set vida(vida:number){
        this._vida = vida
    }

	atacar(personagem: Personagem): void {
		console.log(`${this.emoji} - ${this.nome} está atacando`);
		this.bordao();
		personagem.perderVida(this.ataque);
	}

	perderVida(forcaAtaque: number): void {
		console.log(`${this.emoji} - ${this.nome} agora tem ${this._vida} pts de vida\n`);
		this.vida = this._vida - forcaAtaque;
	}

	abstract bordao(): void;
}

export class Guerreira extends Personagem {
    protected emoji: string = '\u{1F9DD}';

	bordao(): void {
		console.log("GUERREIRA AOOO ATAQUEEE!!");
	}
}
export class Monstro extends Personagem {
    protected emoji: string = '\u{1F9DF}';

    bordao(): void {
        console.log('MOONSTROOOO!!!')
    }
}

const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("Monstro", 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
