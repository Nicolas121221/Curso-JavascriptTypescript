import { Router } from 'express';
import alunoController from '../controllers/aluno.controller.js';

import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/', alunoController.index)
router.get('/:id', alunoController.show)
router.post('/', loginRequired, alunoController.store)
router.put('/:id', loginRequired, alunoController.update)
router.delete('/:id', loginRequired, alunoController.delete)

export default router;
