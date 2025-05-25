const express = require('express')
const routes = require('./routes.js')
const app = express();
const path = require('path')
const { meuMiddleware } = require('./src/middlewares/middleware.js')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware)

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Sevidor executando na porta 3000');
});