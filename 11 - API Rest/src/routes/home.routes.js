import { Router } from 'express';
import homeController from '../controllers/home.controller.js'

const router = new Router();

router.get('/', homeController.index)

export default router;
