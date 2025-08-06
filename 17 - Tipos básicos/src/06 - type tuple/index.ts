// tupla: é um array com mais de um tipo por indice
const dadosCliente1: [number, string] = [1, "Nícolas"];
const dadosCliente2: [number, string, string] = [1, "Nícolas", "Guedes"];
const dadosCliente3: [number, string, string?] = [1, "Nícolas"];
const dadosCliente4: [number, string, ...string[]] = [1, "Nícolas"];

dadosCliente1[0] = 2;
dadosCliente1[1] = "Guedes";

dadosCliente1.pop()

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly array
const array1: readonly string[] = ['Nícolas', 'Guedes']
const array2: ReadonlyArray<string> = ['Nícolas', 'Guedes']

console.log(array1)
console.log(array2)

