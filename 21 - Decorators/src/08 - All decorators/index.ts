// Constructor type
type Constructor = new (...args: any[]) => any;

// class decorator
function classDecorator(constructor: Constructor): any {
	console.log("Class");
	console.log(constructor);
	console.log("\n", "_".repeat(20));

	return class extends constructor {
		// TODO
	};
}

// method decorator
function methodDecorator(
	classPrototype: any,
	fullName: string,
	propertyDescriptor: PropertyDescriptor,
): any {
	console.log("Method");
	console.log(classPrototype);
	console.log(fullName);
	console.log(propertyDescriptor);
	console.log("\n", "_".repeat(20));

	return {
		// change the original method
		// value: (...args: any[]) => console.log(args),
		writable: true,
		enumerable: true,
		configurable: true,
	};
}

// static Method decorator
function staticMethodDecorator(
	classConstructor: Constructor,
	methodName: string,
	propertyDescriptor: PropertyDescriptor,
): any {
	console.log("Static Method");
	console.log(classConstructor);
	console.log(methodName);
	console.log(propertyDescriptor);
	console.log("\n", "_".repeat(20));

	return {
		// you can use get/set or value
		enumerable: true,
		configurable: true,
	};
}

// param decorator
function paramDecorator(
	classPrototype: any,
	paramName: string,
	index: number,
): any {
	console.log("Param");
	console.log(classPrototype);
	console.log(paramName);
	console.log(index);
	console.log("\n", "_".repeat(20));
}

// static param decorator
function staticParamDecorator(
	classConstructor: Constructor,
	paramName: string,
	index: number,
): any {
	console.log("Static Param");
	console.log(classConstructor);
	console.log(paramName);
	console.log(index);
	console.log("\n", "_".repeat(20));
}

// property decorator
function propertyDecorator(classPrototype: any, propertyName: string): any {
	console.log("Property");
	console.log(classPrototype);
	console.log(propertyName);
	console.log("\n", "_".repeat(20));

	// you can use get/set or value
	let propertyValue: any;
	return {
		enumerable: true,
		configurable: true,
		get: () => propertyValue,
		set: (value: any) => {
			if (typeof value === "string") {
				propertyValue = value.split("").reverse().join("");
				return;
			}
			propertyValue = value;
		},
	};
}

// static property
function staticPropertyDecorator(
	classConstructor: any,
	propertyName: string,
): any {
	console.log("static property");
	console.log(classConstructor);
	console.log(propertyName);
	console.log("\n", "_".repeat(20));

	return {
		// you can use get/set or value
		enumerable: true,
		configurable: true,
	};
}

// Getter/Setter
function getterAndSetterDecorator(
	classPrototype: any,
	propertyName: string,
	propertyDescriptor: PropertyDescriptor,
): any {
	console.log("getter/setter");
	console.log(classPrototype);
	console.log(propertyName);
	console.log(propertyDescriptor);
	console.log("\n", "_".repeat(20));

	return {
		// you can use get/set or value
		enumerable: true,
		configurable: true,
	};
}

// static getter/setter
function staticGetterAndSetterDecorator(
	classConstructor: Constructor,
	propertyName: string,
	propertyDescriptor: PropertyDescriptor,
): any {
	console.log("static getter/setter");
	console.log(classConstructor);
	console.log(propertyName);
	console.log(propertyDescriptor);
	console.log("\n", "_".repeat(20));

	return {
		// you can use get/set or value
		enumerable: true,
		configurable: true,
	};
}

@classDecorator
export class Person {
	@propertyDecorator
	firstName: string;
	secondName: string;
	age: number;

	@staticPropertyDecorator
	static staticProperty = "value static Property";

	constructor(firstName: string, secondName: string, age: number) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
	}

	@methodDecorator
	method(@paramDecorator msg: string): string {
		return `${this.firstName} ${this.secondName}: ${msg}`;
	}

	@staticMethodDecorator
	static staticMethod(@staticParamDecorator msg: string): string {
		return Person.staticProperty + " - " + msg;
	}

	get fullName(): string {
		return this.firstName + " " + this.secondName;
	}

	@getterAndSetterDecorator
	set fullName(value: string) {
		const words = value.split(/\s+/g);
		const firstWord = words.shift();
		if (!firstWord) return;
		this.firstName = firstWord;
		this.secondName = words.join(" ");
	}

	@staticGetterAndSetterDecorator
	static get staticPropertyGetterSetter(): string {
		return Person.staticProperty;
	}

	static set staticPropertyGetterSetter(value: string) {
		Person.staticProperty = value;
	}
}

const person = new Person("Nícolas", "Guedes", 18);
person.fullName = "Nícolas 121221";
const method = person.method("Hello world!");
const staticMethod = Person.staticMethod("Hello world!");

console.log(person);
console.log(method);
console.log(staticMethod);
console.log(Person.staticProperty);
