import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config()
// DB Connection
connectDB()
const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Routes
app.use('/api/users/',userRoutes);
app.use('/api/blogs/', blogRoutes)

// Errr midle ware
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => res.send('Welcome to ghostieve server I guiess'))

app.listen(PORT, () => console.log(`listing on port: ${PORT}`))