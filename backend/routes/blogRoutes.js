import express from 'express';
import { getBlogs, getSingleBlog, getFeaturedBlog, createBlog, updateBlog, likeBlog, deleteBlog } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router()

// *** /api/blogs/

router.get('/', getBlogs)
router.get('/:id', getSingleBlog)
router.get('/featured', getFeaturedBlog)
router.post('/create', protect, createBlog)
router.put('/:id', protect, updateBlog)
router.put('/likeBlog/:id', protect, likeBlog)
router.delete('/deleteBlog/:id', protect, deleteBlog)



export default router;