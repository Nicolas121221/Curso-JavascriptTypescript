// Record
const object1: Record<string, string | number> = {
	firstName: "Nícolas",
	secondName: "Guedes",
	age: 18,
};
console.log(object1);

type PersonProtocol = {
	firstName?: string;
	secondName?: string;
	age?: 18;
};

// Required
type PersonRequired = Required<PersonProtocol>;

// Partial
type PersonPartial = Partial<PersonRequired>;

// Readonly
type PersonReadonly = Readonly<PersonPartial>;

// Pick
type PersonPick = Pick<PersonReadonly, "firstName" | "secondName" | "age">;

const object2: PersonPick = {
	firstName: "Nícolas",
	secondName: "Guedes",
	age: 18,
};
console.log(object2);

// Extract & Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

const object3: TypeExclude = "B";
const object4: TypeExtract = "C";
console.log(object3, object4);

type AccountMongo = {
	_id: string;
	firstName: string;
	age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
	id: string;
};

const accountMongo: AccountMongo = {
	_id: "asdfasdfasdf",
	firstName: "Nícolas",
	age: 18,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
	const { _id, ...accountData } = accountMongo;
	return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
