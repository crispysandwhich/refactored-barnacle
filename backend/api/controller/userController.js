import asyncHandler from 'express-async-handler'
import generateToken from '../utils/genereateToken.js'
import User from '../model/userModel.js'

// PUT /api/users/auth PUBLIC
const authUser = asyncHandler( async (req, res) => {
  
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if(user && (await user.matchPassword(password))){
    generateToken(res, user._id)
    res.status(200).json({ 
      _id: user._id,
      username: user.username,
      email: user.email
    })
  }else{
    res.status(400)
    throw new Error('invalid credientials try again')
  }

})
// PUT /api/users/ PUBLIC
const registerUser = asyncHandler( async (req, res) => {
  
  const {username, email, password, web3Address} = req.body

  const userExist = await User.findOne({email})

  if(userExist){
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    username,
    email,
    password,
    web3Address
  })

  if(user) {
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid User')
  }

  
})
// PUT /api/users/logout PUBLIC
const logoutUser = asyncHandler( async (req, res) => {
  
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })
  res.status(200).json({message: 'sucess logout'})
})
// GET /api/users/profile PRIVATE
const getUserProfile = asyncHandler( async (req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email
  }
  res.status(200).json(user)
})
// PUT /api/users/profile PRIVATE
const updateUserProfile = asyncHandler( async (req, res) => {

  const user = await User.findById(req.user._id)

  if(user){
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    
    if(req.body.password) {
      user.password = req.body.password
    }

    if(req.body.profileImg){
      user.profileImg = req.body.profileImg
    }

    if(req.body.profileDescription){
      user.profileDescription = req.body.profileDescription
    }

    if(req.body.web3Address){
      user.web3Address = req.body.web3Address
    }

    const updatedUser = await user.save()

    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      profileImg: updatedUser.profileImg,
      profileDescription: updatedUser.profileDescription,
      web3Address: updatedUser.web3Address
    })


  }else {
    res.status(404)
    throw new Error("user not found")
  }

})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
}