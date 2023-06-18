import express from 'express';
import { authUser, registerUser } from '../controllers/userController.js';
const router = express.Router();


router.post('/auth', authUser)
router.post('/', registerUser)

export default router