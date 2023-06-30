import express from 'express'
import { userLogout, getSingleUser } from "../controller/userController.js"
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router()


// POST /api/user/logout
router.post('/logout', userLogout)

// GET /api/user/:id
router.get('/:id', getSingleUser)

export default router