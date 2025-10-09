import { resolve } from "path";
import { CustomerDataParserTxt } from "./classes/customer-data-parser-txt.ts";
import { CustomerDataParserJson } from "./classes/customer-data-parser-json.ts";

async function run() {
	const filePathTxt = resolve(import.meta.dirname, "files", "customer.txt");
	const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
	await customerDataParserTxt.fixCustomerData();
	console.log(customerDataParserTxt.customerData);

	console.log();

	const filePathJson = resolve(import.meta.dirname, "files", "customer.json");
	const customerDataParserJson = new CustomerDataParserJson(filePathJson);
	await customerDataParserJson.fixCustomerData();
	console.log(customerDataParserJson.customerData);

	console.log();
}

run();
