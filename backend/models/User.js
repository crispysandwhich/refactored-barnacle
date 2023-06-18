import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
}, {timestamps: true})

// Middle ware in the modle wich will hash the password before it gets sent to DB
UserSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)

})

UserSchema.methods.matchPassword = async function(userPass) {
  return await bcrypt.compare(userPass, this.password)
}

const User = mongoose.model('User', UserSchema)

export default User