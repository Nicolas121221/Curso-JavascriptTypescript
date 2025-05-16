import GeraCPF from './modules/GeraCPF.js'

import '../public/assets/css/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})()