function decorator(
	classPrototype: any,
	methodName: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
	console.log(classPrototype);
	console.log(methodName);
	console.log(descriptor);

	return {
		writable: true,
		value: function (...args: string[]): string {
			return args[0].toUpperCase();
		},
	};
}

export class Person {
	firstName: string;
	secondName: string;
	age: number;

	constructor(firstName: string, secondName: string, age: number) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
	}

	@decorator
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

// person.method = () => "Eiiiii";
const method = person.method("Hello world");

console.log(method);
