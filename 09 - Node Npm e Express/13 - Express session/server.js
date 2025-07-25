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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000*60*60*24*7,
        httpOnly:true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Sevidor executando na porta 3000');
    });
});