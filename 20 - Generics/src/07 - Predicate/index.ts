export function isNumber(value: unknown): value is number {
	return typeof value === "number";
}

export function sumArguments<T>(...args: T[]): number {
	const result = args.reduce((sum, value) => {
		if (isNumber(value) && isNumber(sum)) {
			return sum + value;
		}
		return sum;
	}, 0);

	return result;
}

console.log(isNumber(123));

console.log(sumArguments(1, 2, 3));
console.log(sumArguments(...[1, 2, 3,]));
console.log(sumArguments("a", "b", "c"));
