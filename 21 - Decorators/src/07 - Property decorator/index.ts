function decorator(classPrototype: any, propertyName: string | symbol): any {
	console.log(classPrototype);
	console.log(propertyName);

	let propertyValue: any;

	return {
		get: () => propertyValue,
		set: (value: any) => {
			propertyValue = value.split("").reverse().join("");
		},
	};
}

export class Person {
	@decorator
	firstName: string;
    @decorator
	secondName: string;
	age: number;

	constructor(firstName: string, secondName: string, age: number) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
	}

	method(msg: string): string {
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
