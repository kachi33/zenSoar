import { Router } from "express";

import authController from '../controllers/authController.js';

const router = Router();


// Routes
router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/forgot-password', authController.resetRequestHandler)
router.post('/reset-password', authController.passwordResetHandler)

export default router;
