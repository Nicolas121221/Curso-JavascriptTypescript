const express = require('express')
const router = express.Router()
const homeController = require('./controllers/home.controller.js')
const contatoController = require('./controllers/contato.controller.js')

// rotas da home
router.get('/', homeController.paginaInicial)
router.post('/', homeController.trataPost)

// Rotas de contato
router.get('/contato', contatoController.paginaInicial)

module.exports = router;