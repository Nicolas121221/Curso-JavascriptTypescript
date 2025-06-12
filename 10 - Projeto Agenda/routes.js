const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/home.controller.js')
const loginController = require('./src/controllers/login.controller.js')
const contatoController = require('./src/controllers/contato.controller.js')
const { loginRequired} = require('./src/middlewares/middleware.js')


router.get('/', homeController.index)

router.get('/login/', loginController.index)
router.post('/login/register', loginController.register)
router.post('/login/login', loginController.login)
router.get('/login/logout', loginController.logout)

router.get('/contato', loginRequired ,contatoController.index)
router.post('/contato/register', loginRequired ,contatoController.register)
router.get('/contato/:id', loginRequired ,contatoController.editIndex)
router.post('/contato/edit/:id', loginRequired ,contatoController.edit)
router.get('/contato/delete/:id', loginRequired ,contatoController.delete)

module.exports = router;