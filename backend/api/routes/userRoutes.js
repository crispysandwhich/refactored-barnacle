import express from 'express';
import { 
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
} from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// POST /api/users/auth - Login User
router.post('/auth', authUser)
// POST /api/users/logout - Logout User 
router.post('/logout', logoutUser)
// GET | PUT /api/users/profile - Get user Profile and update user profile
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router