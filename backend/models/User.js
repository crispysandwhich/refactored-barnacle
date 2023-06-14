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
  profileImg: {
    type: String,
  }
}, {timestamps: true})

// Middle ware in the modle wich will hash the password before it gets sent to DB
UserSchema.pre('save', async function(next) {
  // if password isnt changed then move on
  if(!this.isModified('password')) {
    next()
  }

  // if user image isnt changed then move on
  if(!this.isModified('profileImg')){
    next()
  }

  // Sets default user img for now
  const defaultProfileImg = 'https://nft-market-assets.yokaiswap.com/0x73c0e2A4B765ed81f63759d1Fcf2C4DCD2925f4A/tanuki-master.png'
  this.profileImg = defaultProfileImg

  // Genereates a crypt hash for password and sets it before its saved to DB
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)

})

UserSchema.methods.matchPassword = async function(userPass) {
  return await bcrypt.compare(userPass, this.password)
}

const User = mongoose.model('User', UserSchema)

export default User