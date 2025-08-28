import { Persistency } from "../../src/services/persistency";

describe("Persistency", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should return undefined", () => {
		// System Under Test - sut
		const sut = new Persistency();

		expect(sut.saveOrder()).toBeUndefined();
	});

	it("should call console.log once", () => {
		const sut = new Persistency();

		const consoleSpy = jest.spyOn(console, "log");
		sut.saveOrder();

		expect(consoleSpy).toHaveBeenCalledTimes(1);
	});

	it('should call console.log with "Your order was saved"', () => {
		const sut = new Persistency();

		const consoleSpy = jest.spyOn(console, "log");
		sut.saveOrder();

		expect(consoleSpy).toHaveBeenCalledWith("Your order was saved");
	});
});
