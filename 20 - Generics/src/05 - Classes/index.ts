export class Person<T, U> {
	constructor(public name: T, public age: U) {}
}

const person1 = new Person("Nícolas", 18);
const person2 = new Person(["Nícolas"], 18);
const person3 = new Person(["Nícolas"], { age: 18 });
const person4 = new Person<string, number>("Nícolas", 18);

console.table([person1, person2, person3, person4]);

export class Stack<T> {
	private counter = 0;
	private elements: { [key: number]: T } = {};

	push(element: T): void {
		this.elements[this.counter] = element;
		this.counter++;
	}

	pop(): T | void {
		if (this.isEmpty()) return undefined;

		this.counter--;
		const element = this.elements[this.counter];
		delete this.elements[this.counter];
		return element;
	}

	isEmpty(): boolean {
		return this.counter === 0;
	}

	getLength(): number {
		return this.counter;
	}

	getStack(): void {
		for (const key in this.elements) {
			console.log(this.elements[key]);
		}
	}
}

const stack = new Stack<number | string>();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push('4 - string')

stack.getStack();

const element = stack.pop();
console.log(element, '\n')

while (!stack.isEmpty()){
    console.log(stack.pop())
}
