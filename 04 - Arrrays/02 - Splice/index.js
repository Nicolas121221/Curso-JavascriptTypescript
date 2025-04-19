const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// ! nomes.splice(InputDeviceInfo, delete , elem1, elem1, elem3)
// ? .pop() 
// const removidos = nomes.splice(-1,1);

// ? .shift()
const removidos = nomes.splice(0, 1);
console.log(nomes, removidos);

// ? .push() 
// const adicionados = nomes.splice(0, 0, 'Nícolas', 'Guedes');

// ? .unshift()
const adicionados = nomes.splice(nomes.length, 0, 'Nícolas', 'Guedes')
console.log(nomes, adicionados)

