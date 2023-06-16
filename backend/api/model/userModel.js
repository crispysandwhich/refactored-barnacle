import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({

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
    required: true,
    min: 6
  },
  profileImg: {
    type: String,
  },
  profileDescription: {
    type: String,
  },
  web3Address: {
    type: String
  }

}, { timeStamps: true })

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

const User = mongoose.model('User', userSchema);

export default User;