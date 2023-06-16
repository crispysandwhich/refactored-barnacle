// Create Express Router
import express  from 'express'
import { 
  getAllBlogs, 
  getSingleBlog, 
  createBlog, 
  updateBlog,
  deleteBlog,
  likeBlog,
  commentOnBlog,
  featureBlog } from '../controller/blogController.js'
import { protect } from '../middleware/authMiddleware.js'
import upload from '../middleware/uploadMiddleware.js'
const router = express.Router()


// /api/blogs/
router.get('/', getAllBlogs)
// /api/blogs/:id
router.get('/:id', getSingleBlog)
// /api/blogs/create
router.post('/create', protect, createBlog)
// /api/blogs/update/:id
router.put('/update/:id', upload.single('image'), protect, updateBlog)
// /api/blogs/delete/:id
router.delete('/delete/:id',protect, deleteBlog)
// api/blogs/likeBlog/:id
router.put('/likeBlog/:id',protect, likeBlog)
// /api/blogs/comment/:id
router.put('/comment/:id',protect, commentOnBlog)
// /api/blogs/feature/:id
router.put('/feature/:id',protect, featureBlog)

export default router