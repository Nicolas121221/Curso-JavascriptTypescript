import validator from "validator";
import type { EmailValidatorFnProtocol } from "./email-validator-protocol.ts";

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
	value: string,
): boolean => {
	return validator.isEmail(value);
};
