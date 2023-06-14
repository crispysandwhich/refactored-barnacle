import express from 'express';
import multer from 'multer';
import { getBlogs, 
        getSingleBlog, 
        getFeaturedBlog, 
        createBlog, 
        updateBlog, 
        likeBlog, 
        deleteBlog,
        uploadImage
  } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router()

// Multer Setup
const storage = multer.diskStorage({
  destination: function (req,file, cb){
    cb(null, '../public/images')
  },
  filename: function(req,file, cb){
    cb(null, req.body.filename)
  }
})

const upload = multer({storage: storage})

// *** /api/blogs/

router.get('/', getBlogs)
router.get('/:id', getSingleBlog)
router.get('/featured', getFeaturedBlog)
router.post('/upload', upload.single('image'), protect, uploadImage)
router.post('/create', protect , createBlog)
router.put('/:id', protect, updateBlog)
router.put('/likeBlog/:id', protect, likeBlog)
router.delete('/deleteBlog/:id', protect, deleteBlog)



export default router;