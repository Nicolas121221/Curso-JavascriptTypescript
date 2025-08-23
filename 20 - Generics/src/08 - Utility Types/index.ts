// Record
const object1: Record<string, string | number> = {
	firstName: "Nícolas",
	secondName: "Guedes",
	age: 18,
};
console.log(object1)

type PersonProtocol = {
    firstName?:string
    secondName?:string,
    age?: 18
}

// Required
type PersonRequired = Required<PersonProtocol>;

// Partial
type PersonPartial = Partial<PersonRequired>;

// Readonly
type PersonReadonly = Readonly<PersonPartial>

// Pick
type PersonPick = Pick<PersonReadonly>

const object2:PersonPick = {
	firstName: "Nícolas",
	secondName: "Guedes",
	age: 18,
};
console.log(object2)

export default 1;
