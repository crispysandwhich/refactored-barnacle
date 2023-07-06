// index
import dotenv from 'dotenv'
import server from './backend/server.js';
import multer from 'multer'
import { userRegister } from './backend/api/controller/userController.js';
import { createBlog, updateBlog } from './backend/api/controller/blogController.js';
import { protect } from "./backend/api/middleware/authMiddleware.js";
import connectDB from "./backend/api/config/db.js"

dotenv.config()
connectDB()

const PORT = process.env.PORT || 3001;

// File storage
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, "./backend/public/images")
  },
  filename: function(req,file,cb){
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

// Route with file uploades
server.post('/auth/register', upload.single('picture'), userRegister)
server.post('/blog/create', protect, upload.single('picture'), createBlog)
server.put('/blog/update/:id', protect, upload.single('picture'), updateBlog)


// Listing to server
server.listen(PORT, () => {
  console.log('listening on port', PORT)
})
