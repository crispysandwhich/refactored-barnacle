// index
import dotenv from 'dotenv'
import server from './backend/server.js';
import connectDB from "./backend/api/config/db.js"

dotenv.config()
connectDB()

const PORT = process.env.PORT || 3001;



// Listing to server
server.listen(PORT, () => {
  console.log('listening on port', PORT)
})
