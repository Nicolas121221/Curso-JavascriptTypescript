const personPrototype = {
	firstName: "Nícolas",
	lastName: "Guedes",
	age: 18,
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = "João";

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
