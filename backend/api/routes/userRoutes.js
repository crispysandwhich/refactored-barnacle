import express from 'express';
import { 
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
} from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// login user
router.post('/auth', authUser)
// register user
router.post('/', registerUser)
// logout 
router.post('/logout', logoutUser)

// user profile
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router