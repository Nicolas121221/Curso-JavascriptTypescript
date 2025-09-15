import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter.ts";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter.ts";
import type {
	EmailValidatorFnProtocol,
	EmailValidatorProtocol,
} from "./validation/email-validator-protocol.ts";

function validateEmailClass(
	emailValidator: EmailValidatorProtocol,
	email: string,
): void {
	if (emailValidator.isEmail(email)) {
		console.log("Email is valid (CLASS)");
	} else {
		console.log("email is invalid (CLASS)");
	}
}

function validateEmailFn(
	emailValidator: EmailValidatorFnProtocol,
	email: string,
): void {
	if (emailValidator(email)) {
		console.log("Email is valid (FN)");
	} else {
		console.log("email is invalid (FN)");
	}
}

validateEmailClass(new EmailValidatorClassAdapter(), "nicolas@email.com");
validateEmailFn(emailValidatorFnAdapter, "nicolas@email.com");
