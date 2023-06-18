import express from 'express';
import { getBlogs, getSingleBlog, getFeaturedBlog, createBlog, updateBlog, likeBlog, deleteBlog } from '../controllers/blogController.js';
import verifyToken from '../middleware/verifyToken.js'
const router = express.Router()

// *** /api/blogs/

router.get('/', getBlogs)
router.get('/blog/:id', getSingleBlog)
router.get('/featured', getFeaturedBlog)
router.post('/create', verifyToken, createBlog)
router.put('/updateBlog/:id', verifyToken, updateBlog)
router.put('/likeBlog/:id', verifyToken, likeBlog)
router.delete('/deleteBlog/:id', verifyToken, deleteBlog)



export default router;