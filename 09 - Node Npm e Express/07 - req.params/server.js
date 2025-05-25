const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))

// http://facebook.com/profiles/5                     -> url params
// http://facebook.com/profiles/5?campanha=googlead  -> query strings
// http://facebook.com/profiles/5?campanha=googlead&etc



app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input name="nome" type="text">
        <button>Olá mundo</button>
        </form>
        `);
});

app.get('/teste/:id', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`o que você me enviou foi: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Sevidor executando na porta 3000')
});