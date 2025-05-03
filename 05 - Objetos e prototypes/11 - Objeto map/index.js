const pessoas = [
    {id:3, nome: 'Nícolas'},
    {id:2, nome: 'Maria'},
    {id:1, nome: 'Helena'}
];

const novasPessoas = {}
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa}
}

console.log(novasPessoas)

const novasPessoa1 = new Map()
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoa1.set(id, {...pessoa})
}

console.log(novasPessoa1)

for(const pessoa of novasPessoa1){
    console.log(pessoa)
}