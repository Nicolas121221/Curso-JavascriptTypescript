import { Router } from 'express';
import userController from '../controllers/user.controller.js'

const router = new Router();

router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', userController.store)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router;

/*
  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/
