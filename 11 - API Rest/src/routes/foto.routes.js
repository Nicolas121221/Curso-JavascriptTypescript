import { Router } from 'express';
import fotoController from '../controllers/foto.controller.js'

import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.post('/',loginRequired, fotoController.store)

export default router;
