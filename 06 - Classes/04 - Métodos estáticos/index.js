class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // ! Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // ! Método de estático
    static trocaPilha() {
        console.log('Ok, vou trocar')
    }

    static soma(x, y) {
        return x + y
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

console.log(controle)

ControleRemoto.trocaPilha();

console.log(ControleRemoto.soma(4,2))
