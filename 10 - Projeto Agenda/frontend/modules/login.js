import validator from 'validator'

export default class Login{
    constructor(formclass){
        this.form = document.querySelector(formclass)
    }

    init(){
        this.events()
    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit',e => {
            e.preventDefault();
            this.validate(e);
        })
    }
    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="senha"]')

        let error = false;

        if(!validator.isEmail(emailInput.value)){
            alert('e-mail inválido')
            error = true
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Senha precisa ter entre 3 e 50 caracteres');
            error = true
        }

        if(!error) el.submit();
    }
}