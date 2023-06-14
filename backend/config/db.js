// Connection to mango DB

import mongoose from 'mongoose';

const connectDB = async() => {
  try{
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongo connected: ${connect.connection.host}`)
  } catch(err){
    console.error(`err: ${err.message}`)
    process.exit(1)
  }
}


export default connectDB