import { Router } from 'express';
import userController from '../controllers/user.controller.js'

const router = new Router();

router.post('/', userController.create)

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
