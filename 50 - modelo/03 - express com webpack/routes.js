const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/home.controller.js')
const contatoController = require('./src/controllers/contato.controller.js')

// rotas da home
router.get('/', homeController.paginaInicial)
router.post('/', homeController.trataPost)

// Rotas de contato
router.get('/contato', contatoController.paginaInicial)

module.exports = router;