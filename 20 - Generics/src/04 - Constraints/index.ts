type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
	color: "Pink",
	vaccines: ["Vaccine 1", "Vaccine 2"],
	age: 10,
};

const vaccines = getKey(animal, "vaccines");
const color = getKey(animal, "color");
const age = getKey(animal, "age");

console.log(color, vaccines, age);
