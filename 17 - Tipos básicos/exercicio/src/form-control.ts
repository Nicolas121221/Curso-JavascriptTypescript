import isEmail from "validator/lib/isEmail";

class Form {
	form: HTMLFormElement = document.querySelector(".form");
	usernameInput: HTMLInputElement = document.querySelector(".username");
	emailInput: HTMLInputElement = document.querySelector(".email");
	passwordInput: HTMLInputElement = document.querySelector(".password");
	repeatPasswordInput: HTMLInputElement =
		document.querySelector(".password2");
	hasError: boolean = false;

	constructor() {
		this.addFormListener();
	}

	addFormListener(): void {
		this.form.addEventListener("submit", (e: SubmitEvent): void => {
			e.preventDefault();

			this.clearErrors();

			this.validateForm();
			if (!this.hasError) {
                alert('Account Validated')
				this.form.submit();
			}
		});
	}

	clearErrors(): void {
		this.hasError = false;

		document.querySelectorAll(".show-error-message").forEach((e) => {
			e.className = "";
		});
	}

	setError(message: string, element: HTMLInputElement): void {
		this.hasError = true;
		element.parentElement.className = "show-error-message";
		element.nextElementSibling.innerHTML = message;
	}

	validateForm(): void {
		this.validateUsername(this.usernameInput);
		this.validateEmail(this.emailInput);
		this.validatePasswords(this.passwordInput, this.repeatPasswordInput);
	}

	validateUsername(username: HTMLInputElement): void {
		if (username.value.length < 6 || username.value.length > 255)
			this.setError(
				"Username must have more than 6 and less than 255 characters",
				username,
			);
		if (!username.value) this.setError("Username is a required", username);
	}

	validateEmail(email: HTMLInputElement): void {
		if (!isEmail(email.value))
			this.setError("E-mail must be a valid email", email);
		if (!email.value) this.setError("E-mail is a required", email);
	}

	validatePasswords(
		password: HTMLInputElement,
		repeatPassword: HTMLInputElement,
	): void {
		if (password.value.length < 12 || password.value.length > 255)
			this.setError(
				"Password must have more than 12 characters",
				password,
			);

		if (password.value !== repeatPassword.value)
			this.setError(
				"You must repeat your password correctly",
				repeatPassword,
			);

		if (!password.value) this.setError("Password is a required", password);
		if (!repeatPassword.value)
			this.setError("Repeat your Password is a required", repeatPassword);
	}
}

export default new Form();
