import { Router } from 'express';
import alunoController from '../controllers/aluno.controller.js';

const router = new Router();

router.get('/', alunoController.index)

export default router;
