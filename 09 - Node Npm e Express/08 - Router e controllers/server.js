const express = require('express')
const routes = require('./routes.js')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Sevidor executando na porta 3000')
});