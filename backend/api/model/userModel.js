import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from 'bcrypt'


const userSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    default: ""
  },
  profileDescription: {
    type: String,
    default: "I am new here and still havent set much up, be my friend"
  },

}, {timeStamps: true})

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)

})

userSchema.methods.matchPassword = async function(pass) {
  return await bcrypt.compare(pass, this.password)
}

const User = mongoose.model('User', userSchema)

export default User