// server
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoutes.js'
import blogRoute from './routes/blogRoutes.js'
import { registerUser } from "./controller/userController.js"

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(cookieParser())


// Route with file uploades
server.post('/auth/register', upload.single('picture'), registerUser)


// Routes
server.use('/api/users', userRoute)
server.use('/api/blogs', blogRoute)

// Allows you to call this route and it will server images from backend to frontend
// localhost/images/{imgurl}
server.use('/api/images', express.static('../public/images'))

// Error Middleware
server.use(notFound)
server.use(errorHandler) 

export default server

