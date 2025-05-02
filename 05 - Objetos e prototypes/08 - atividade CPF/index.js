// 705.484.450-52 070.987.720-03
/*

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro Dígito)

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2
77  0  40 28 48 20 16 15 0  10 = 284

11 - (284 % 11) = 5 (primeiro Dígito)
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criadigito(cpfParcial)
    const digito2 = this.criadigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2

    return this.cpfLimpo === novoCpf
}

ValidaCPF.prototype.criadigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : digito.toString()
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('070.987.720-03')
console.log(cpf.valida())



