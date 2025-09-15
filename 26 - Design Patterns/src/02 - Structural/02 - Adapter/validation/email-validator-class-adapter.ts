import validator from "validator";
import type { EmailValidatorProtocol } from "./email-validator-protocol.ts";

export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
	isEmail(value: string): boolean {
		return validator.isEmail(value);
	}
}
