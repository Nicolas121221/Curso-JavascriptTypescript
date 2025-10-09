import { promises } from "fs";
import type { CustomerData } from "./customer-data.ts";
import { CustomerDataParser } from "./customer-data-parser.ts";

export class CustomerDataParserJson extends CustomerDataParser {
	protected async parseData(): Promise<CustomerData[]> {
		const rawData = await promises.readFile(this.filePath);

		const data = JSON.parse(rawData.toString());

		const customerData: CustomerData[] = [];

		for (const customer of data) {
			const { name, age, cpf } = customer;

			if (!age || !name || !cpf) continue;
			customerData.push({ name, age, cpf });
		}

		return customerData;
	}
}
