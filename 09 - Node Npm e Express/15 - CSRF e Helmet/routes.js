const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/home.controller.js')
const contatoController = require('./src/controllers/contato.controller.js')

function meuMiddleware(req, res, next) {
    req.session.usuario = {nome:'Nícolas', sobrenome:'Guedes'}
    console.log()
    console.log('passei no meuMiddleware')
    console.log()
    next()
}



// rotas da home
router.get('/', meuMiddleware, homeController.paginaInicial, function(req,res,next){
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`)
})
router.post('/', homeController.trataPost)

// Rotas de contato
router.get('/contato', contatoController.paginaInicial)

module.exports = router;