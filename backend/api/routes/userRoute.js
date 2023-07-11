import express from 'express';
import { 
  getUserAccount,
  logUserIn,
  updateUser,
  registerUserAccount,
  userLogout,
  getSingleUser
} from "../controller/userController.js"
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js'
const router = express.Router();

// [GET] /api/user
router.get('/', protect, getUserAccount)
// [GET] /api/user/:id
router.get('/:id', getSingleUser)
// [POST] /api/user/login
router.post('/login', logUserIn)
// [POST] /api/user/register
router.post('/register', upload.single('profile'), registerUserAccount)
// [POST] /api/user/logout
router.post('/logout', userLogout)
// [PUT] /api/user/update
router.put('/update', protect, upload.single('profile'), updateUser)



export default router