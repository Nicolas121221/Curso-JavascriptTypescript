const express = require('express')
const routes = require('./routes.js')
const app = express();
const mongoose = require('mongoose')

require('dotenv').config()

const connectionString = process.env.CONNECTIONSTRING
mongoose.connect(connectionString)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware.js')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal)

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Sevidor executando na porta 3000');
    });
})

