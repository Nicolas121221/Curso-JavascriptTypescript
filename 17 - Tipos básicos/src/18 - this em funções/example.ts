export function funcao(this: Date, name: string, age: number): void {
	console.log(this);
	console.log(name, age);
}

funcao.call(new Date(), "Nícolas", 18);
funcao.apply(new Date(), ["Nícolas", 18]);
funcao("nicolas");
