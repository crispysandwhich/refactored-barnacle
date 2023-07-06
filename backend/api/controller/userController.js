import User from '../model/userModel.js'
import generateToken from "../utils/generateToken.js"

// POST - /auth/register
const userRegister = async (req, res) => {

  const { username, email, password } = req.body

  try {
    // Cheacking to see if user submitted profile image
    if(!req.file) {
      // Mint a profile image
      const defaultImage = '../../public/defaultImg/profile-1.png'
      req.file = { filename: 'profile-1.png', path: defaultImage}
    }
    // Check to see if user exist
    const userExist = await User.findOne({email})
    if(userExist){
      res.status(400).json({message: 'User already exists'})
    }
    // Create New User
    const newUser = await User.create({
      username,
      email,
      password,
      profileImage: req.file.path,
    })
    // Serve the frontend user data
    if(newUser){
      generateToken(res, newUser._id)
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profileImage: newUser.profileImage,
      })
    } else{
      res.status(400).json("couldnt create token")
    }

  } catch (error) {
    res.status(400).json(error)
  }

}

// POST - /auth/user/login
const userLogin = async (req, res) => {
  
  const { email, password } = req.body

  try{
    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
      generateToken(res, user._id)

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profileImg: user.profileImage,
      })
    } 

  } catch(error){
    res.status(400).json({mes: error})
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
        profileImg: user.profileImage
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
  userLogin,
  userRegister,
  userLogout,
  getSingleUser
}
