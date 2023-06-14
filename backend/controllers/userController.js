import User from "../models/User.js"
import generateToken from "../utils/generateToken.js"


// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = async (req,res) => {
  const {email, password} = req.body

  try {
    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
      const d = generateToken(res, user._id)

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profileImg: user.profileImg,
        token: d
      })

    } else {
      res.status(401)
      throw new Error("ivalid user")
    }

  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

// @desc Register Create a new user
// route POST /api/users
// @access Public
const registerUser = async (req,res) => {

  const {username, email, password, profileImg} = req.body

  try {
    const user = await User.findOne({email}) 

    if(user) {
      res.status(400)
      throw new Error(`User ${email} already exists. Choose another one`)
    }

    // Registers new user
    const newUser = await User.create({
      username,
      email,
      password,
      profileImg,
    })


    if(newUser) {
      
      const d = generateToken(res, newUser._id)
      
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profileImg: newUser.profileImg,
        token: d
      })

      
    }else{
      res.status(400).json({message: 'couldnt create user'})
    }


  } catch (error) {
    res.status(400).json({message: error.message})
  }

}

// @desc Logout LogoutUser
// route POST /api/users/logout
// @access Public
const logoutUser = async (req,res) => {
  res.cookie('jwt', '', { 
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({message: 'user logged out'})
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {

  try {
    const user = await User.findById(req.user._id);
    
    if (user) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        profileImg: user.profileImg
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {

  try {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.profileImg = req.body.profileImg || user.profileImg;
  
      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();
      
      res.status(200).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        profileImg: updatedUser.profileImg
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
}