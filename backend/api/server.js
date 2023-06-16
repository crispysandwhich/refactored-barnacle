import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoutes.js'
import blogRoute from './routes/blogRoutes.js'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(cookieParser())


// Routes
server.use('/api/users', userRoute)
server.use('/api/blogs', blogRoute)

// Error Middleware
server.use(notFound)
server.use(errorHandler) 

export default server

