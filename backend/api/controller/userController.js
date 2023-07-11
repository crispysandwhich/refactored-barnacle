import User from '../model/userModel.js'
import generateToken from "../utils/generateToken.js"

// [GET] /api/user auth 
const getUserAccount = async (req,res) =>  {
  try {
    const user = await User.findOne({email: req.user.email})
    if(user){
      res.status(200).json({
        username: user.username,
        email: user.email,
        profileImage: user.profileImage,
        description: user.profileDescription
      })
    }else {
      res.status(404).json({message: 'User not found'})
    }
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

// [POST] /api/user/register 
const registerUserAccount = async (req,res) => {
  // console.log(req.file)

  try {
    // Checks to see if email exist
    const userExist = await User.findOne({email: req.body.email})
    if(userExist) {
      res.status(400).json({msg: 'User exists buddy, hope you find something better'})
    }

    // If no image than we create an image
    if(!req.file){
      req.file = {filename: "ghostt.jpg"}
    }

    // Setup and create user
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profileImage: `http://localhost:5001/api/images/${req.file.filename}`
    })

    // If success then we respond to client with the following data
    if(newUser) {
      generateToken(res, newUser._id)
      res.status(200).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profileImg_url: newUser.profileImage
      })
    } else {
      res.status(400).json({msg: 'Failed to create an account'})
    }


  } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
  }
}

// [POST] /api/user/login
const logUserIn = async (req, res) => {
  // console.log(req.body)
  try {    
    const user = await User.findOne({email: req.body.email})

    if(user && (await user.matchPassword(req.body.password))) {
      generateToken(res, user._id)
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profileImg_url: user.profileImage
      })
    } else {
      res.status(404).json({message: "sorry user account and password not working well"})
    }

  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}

// [PUT] /api/user/update auth
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.profileDescription = req.body.profileDescription || user.profileDescription
      
      if (req.body.password) {
        user.password = req.body.password;
      }
      
      if(req.file){
        user.profileImage = `http://localhost:5001/api/images/${req.file.filename}`
      }

      const updatedUser = await user.save();
      
      res.status(200).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        profileImg: updatedUser.profileImage,
        profileDescription: updatedUser.profileDescription
      });
    } else {
      res.status(404).json({message: 'User not found'})
    }
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

// POST - /api/user/logout
const userLogout = async (req, res) => {
  res.cookie('jwt', '', { 
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({message: 'user logged out'})
}

// GET - /api/user/:id
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (user) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profileImage_url: user.profileImage
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

export {
  getUserAccount,
  registerUserAccount,
  logUserIn,
  updateUser,
  userLogout,
  getSingleUser
}
