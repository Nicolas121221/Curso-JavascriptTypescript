const express = require('express')
const routes = require('./routes.js')
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Sevidor executando na porta 3000')
});