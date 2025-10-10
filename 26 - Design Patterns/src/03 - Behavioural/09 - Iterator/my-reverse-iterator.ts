import type { MyDataStructure } from "./my-data-structure.ts";
import type { MyIteratorProtocol } from "./my-iterator-protocol.ts";

export class MyReverseIterator implements MyIteratorProtocol<string> {
	private index = 0;
	constructor(private readonly dataStructure: MyDataStructure) {}

	reset(): void {
		this.index = this.dataStructure.size();
	}

	next(): IteratorResult<string> {
		this.index--;
		const returnValue = this.makeValue(
			`${this.dataStructure.items[this.index]}`,
		);
		returnValue.done = this.index < this.dataStructure.size();

		return returnValue;
	}

	private makeValue(value: string): IteratorResult<string> {
		return { value, done: false };
	}
}
