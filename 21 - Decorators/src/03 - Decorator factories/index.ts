function invertProperties(param1: string, param2: string) {
	return function invertProperties<T extends new (...args: any[]) => any>(
		target: T,
	): T {
		// closure

		return class extends target {
			color: string;
			name: string;

			constructor(...args: any[]) {
				super(...args);
				this.name = this.invert(args[0]);
				this.color = this.invert(args[1]);
			}

			invert(value: string): string {
				return `${value
					.split("")
					.reverse()
					.join("")} | ${param1} - ${param2}`;
			}
		};
	};
}

@invertProperties("value1", "value2")
export class Animal {
	constructor(public name: string, public color: string) {}
}

const animal = new Animal("Parrot", "Purple");
console.log(animal);
