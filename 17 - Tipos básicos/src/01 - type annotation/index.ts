// ? type annotation
const nome1: string = "Nícolas";

// inferência de tipos
const nome2 = "Nícolas";

// ? tipos básicos
const nome: string = "Nícolas";
const idade: number = 18;
const adulto: boolean = true;
const simbolo: symbol = Symbol("qualquer símbolo");
const big: bigint = 10n;

// ? Arrays
const arrayDeNumeros1: Array<number> = [1, 2, 3];
const arrayDeStrings1: Array<string> = ["Nícolas", "Guedes"];

const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings2: string[] = ["Nícolas", "Guedes"];

// ? Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
	nome: "Nícolas",
	idade: 18,
	adulto: true, // opicional
};

// ? Funções,
function soma(x: number, y: number): number {
	return x + y;
}

const result:number = soma(2,2)
console.log(result)

const soma2: (x:number, y:number) => number =(x, y) =>{
    return x+y
}
