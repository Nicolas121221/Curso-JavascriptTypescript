import { promises } from "fs";
import type { CustomerData } from "./customer-data.ts";
import { CustomerDataParser } from "./customer-data-parser.ts";

export class CustomerDataParserTxt extends CustomerDataParser {
	protected async parseData(): Promise<CustomerData[]> {
		const rawData = await promises.readFile(this.filePath);

		const data = rawData.toString();
		const lines = data.split("\r\n");

		const customerData: CustomerData[] = [];

		for (const line of lines) {
			const [name, age, cpf] = line.split("\t");

			if (!age || !name || !cpf) continue;
			customerData.push({ name, age, cpf });
		}

		return customerData;
	}
}
