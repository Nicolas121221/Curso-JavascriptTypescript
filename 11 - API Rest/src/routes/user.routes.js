import { Router } from 'express';
import userController from '../controllers/user.controller.js'

import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

// ! Não deveria existir
// router.get('/', loginRequired, userController.index) Lista usuários
// router.get('/:id',loginRequired, userController.show) Lista usuário

router.post('/', loginRequired, userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router;

/*
  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/
