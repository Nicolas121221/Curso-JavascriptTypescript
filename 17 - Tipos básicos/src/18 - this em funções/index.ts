const SHOW_ERROR_MESSAGES = "show-error-message";

import isEmail from "validator/lib/isEmail";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener("sumbit",  (event) =>{
	event.preventDefault();

    const target = event.target as HTMLFormElement;

	// hideErrorMessages(this); // escopo da função
	hideErrorMessages(target);
	checkForEmptyFields(username, email, password, password2);

	checkEmail(email);
	checkEqualPasswords(password, password2);

	// if (shouldSendForm(this)) console.log("formulário enviado"); // this é do escopo da função
	if (shouldSendForm(target)) console.log("formulário enviado");
});

function hideErrorMessages(form: HTMLFormElement): void {
	form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach((item) => {
		item.classList.remove(SHOW_ERROR_MESSAGES);
	});
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
	inputs.forEach((input) => {
		if (!input.value) showErrorMessage(input, "Campo não pode ficar vazio");
	});
}

function checkEmail(input: HTMLInputElement): void {
	if (!isEmail(input.value)) showErrorMessage(input, "Email inválido");
}

function checkEqualPasswords(
	password: HTMLInputElement,
	password2: HTMLInputElement,
): void {
	if (password.value !== password2.value) {
		showErrorMessage(password, "Senha não batem");
		showErrorMessage(password2, "Senha não batem");
	}
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
	const formFields = input.parentElement as HTMLDivElement;
	const errorMessage = formFields.querySelector(
		".error-message",
	) as HTMLSpanElement;
	errorMessage.innerText = msg;
	formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
	let send = true;
	form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(() => {
		send = false;
	});

    return send
}


