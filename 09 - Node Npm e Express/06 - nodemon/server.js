const express = require('express')
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> entrega a página /
// http://meusite.com/sobre <- GET -> entrega a página /sobre
// http://meusite.com/contato <- GET -> entrega a página /contato

app.get('/', (req, res)=>{
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input name="nome" type="text">
        <button>Olá mundo</button>
        </form>
        `);
});

app.post('/',(req,res)=>{
    res.send('Recebi o formulário')
})

app.get('/contato', (req,res)=>{
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Sevidor executando na porta 3000')
});