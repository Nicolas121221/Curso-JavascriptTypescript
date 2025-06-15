import validator from 'validator'

export default class Contato {
    constructor(contatoClass) {
        this.contato = document.querySelector(contatoClass);
    }

    init() {
        this.events()
    }

    events() {
        if (!this.contato) return
        this.contato.addEventListener('submit', (e)=> {
            e.preventDefault();
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target
        const nameInput = el.querySelector('input[name="nome"]')
        const emailInput = el.querySelector('input[name="email"]')
        const telefoneInput = el.querySelector('input[name="telefone"]')

        let error = false;

        if(!nameInput.value){
            alert('O campo nome deve ser preenchido')
            error = true
        }

        if(!telefoneInput.value && !emailInput.value){
            alert('O contato deve ter um email ou um número de telefone')
            error = true
        }else if(emailInput.value){
            if(!validator.isEmail(emailInput.value)){
                alert('e-mail inválido')
                error = true
            }
        }else if(!telefoneInput.value){
            if(!telefoneInput.value.length  > 0 ) {
                alert('o telefone deve ser válido')
                error = true
            }
        }

        if(error) return;
        el.submit();
    }
}