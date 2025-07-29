"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _usercontrollerjs = require('../controllers/user.controller.js'); var _usercontrollerjs2 = _interopRequireDefault(_usercontrollerjs);

var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

// ! Não deveria existir
// router.get('/', loginRequired, userController.index) Lista usuários
// router.get('/:id',loginRequired, userController.show) Lista usuário

router.post('/', _loginRequiredjs2.default, _usercontrollerjs2.default.store)
router.put('/', _loginRequiredjs2.default, _usercontrollerjs2.default.update)
router.delete('/', _loginRequiredjs2.default, _usercontrollerjs2.default.delete)

exports. default = router;

/*
  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/
