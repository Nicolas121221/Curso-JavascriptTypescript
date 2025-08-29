import {
	EnterpriseCustomer,
	IndividualCustomer,
} from "../../src/classes/customer";

const createIndividualCustomer = (
	firstName: string,
	lastName: string,
	cpf: string,
): IndividualCustomer => {
	return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
	return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => {
	jest.clearAllMocks();
});

describe("IndividualCustomer", () => {
	it("should have firstName, lastName and cpf", () => {
		const sut = createIndividualCustomer("Nícolas", "Guedes", "111.111");

		expect(sut).toHaveProperty("firstName", "Nícolas");
		expect(sut).toHaveProperty("lastName", "Guedes");
		expect(sut).toHaveProperty("cpf", "111.111");
	});

	it("should have methods to get name and idn for individual customers", () => {
		const sut = createIndividualCustomer("Nícolas", "Guedes", "111.111");

		expect(sut.getName()).toBe("Nícolas Guedes");
		expect(sut.getIDN()).toBe("111.111");
	});
});

describe("EnterpriseCustomer", () => {
	it("should have name and cnpj", () => {
		const sut = createEnterpriseCustomer("microsoft", "111.111/1111");

		expect(sut).toHaveProperty("name", "microsoft");
		expect(sut).toHaveProperty("cnpj", "111.111/1111");
	});

	it("should have methods to get name and idn", () => {
		const sut = createEnterpriseCustomer("microsoft", "111.111/1111");

		expect(sut.getName()).toBe("microsoft");
		expect(sut.getIDN()).toBe("111.111/1111");
	});
});
