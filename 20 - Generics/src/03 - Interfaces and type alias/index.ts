interface PersonProtocol<T = string, U = number> {
	firstName: T;
	secondName: T;
	age: U;
}

const student1: PersonProtocol<string, number> = {
	firstName: "Nícolas",
	secondName: "Guedes",
	age: 18,
};

const student2: PersonProtocol<number, number> = {
	firstName: 123,
	secondName: 321,
	age: 30,
};

const student3: PersonProtocol = {
	firstName: "Nícolas",
	secondName: "Guedes",
	age: 30,
};

console.table([student1,student2,student3]);
