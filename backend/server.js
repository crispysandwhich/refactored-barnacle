import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'

// Routes
import userRoute from './api/routes/userRoute.js'
import blogRoute from './api/routes/blogRoute.js'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(cookieParser())
server.use(helmet())
server.use(morgan("common"))


// Allows you to call this route and it will server images from backend to frontend
// localhost/images/{imgurl}
server.use('/images', express.static('./public/images'))


// Routes
server.use('/api/user', userRoute)
server.use('/api/blog', blogRoute)
// Dont forget to add posts


export default server