function decorator(
	classPrototype: any,
	methodName: any,
	index: any,
): any {
	console.log(classPrototype);
	console.log(methodName);
	console.log(index);
}

export class Person {
	firstName: string;
	secondName: string;
	age: number;

	constructor(
		@decorator firstName: string,
		@decorator secondName: string,
		@decorator age: number,
	) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
	}

	method(@decorator msg: string): string {
		return `${this.firstName} ${this.secondName}: ${msg}`;
	}

	get fullName(): string {
		return this.firstName + " " + this.secondName;
	}

	set fullName(value: string) {
		const words = value.split(/\s+/g);
		const firstWord = words.shift();
		if (!firstWord) return;
		this.firstName = firstWord;
		this.secondName = words.join(" ");
	}
}

const person = new Person("Nícolas", "Guedes", 18);

const method = person.method("Hello world");
console.log(method);
