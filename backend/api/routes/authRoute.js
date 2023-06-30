import express from 'express'
// using user controler
import { userLogin } from '../controller/userController.js'
const router = express.Router()


// POST /auth/login
router.post('/login', userLogin)

export default router