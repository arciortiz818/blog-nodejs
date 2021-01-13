import { Router, Request, Response } from "express";

import { indexController } from '../controllers/IndexController';

const router: Router = Router();

router.get('/', indexController.index);
router.get('/posts/save', indexController.savePost);

export default router;