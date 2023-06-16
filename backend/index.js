import express from 'express'
import dotenv from 'dotenv'
import server from './api/server.js'
import connectDB from './api/config/db.js'


dotenv.config()
// Connecting to DB
connectDB()

const PORT = process.env.PORT || 5000

// Allows you to call this route and it will server images from backend to frontend
// localhost/images/{imgurl}
server.use('/images', express.static('../../public/images'))

// Listing to server
server.listen(PORT, () => {
  console.log('listening on port', PORT)
})

