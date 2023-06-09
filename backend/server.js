import express from 'express';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config()
// DB Connection
connectDB()
const PORT = process.env.PORT || 5000


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api/users/',userRoutes);
app.use('/api/blogs/', blogRoutes)


app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => res.send('Welcome to ghostieve server I guiess'))

app.listen(PORT, () => console.log(`listing on port: ${PORT}`))