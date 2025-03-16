const verdadeira = true;

// let tem escopo de bloco {...bloco}
// Var só tem escopo de função

let nome = 'luiz'; // Criada
var nome2 = 'luiz';


if (verdadeira) {
    let nome = 'otávio' // Criada
    var nome2 = 'Otávio' // Redeclarada
    console.log(nome, nome2)
    if (verdadeira) {
        let nome = 'outra coisa';
        console.log(nome, nome2)
    }
}

function FalaOi (){

    if(verdadeira){
        let nome = 'Luiz'
        var sobrenome = 'Miranda';  
    }
    console.log(sobrenome)
}

FalaOi()

let sobrenome = 'Miranda';
console.log(sobrenome);

