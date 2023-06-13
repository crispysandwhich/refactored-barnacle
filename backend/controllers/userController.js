import generateToken from "../utils/generateToken.js"
import User from "../models/User.js"

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
        d
      })

    } else {
      res.status(401)
      throw new Error("ivalid user")
    }


  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


const registerUser = async (req,res) => {

  const {username, email, password} = req.body

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
      password
    })

    if(newUser) {
      
      const d = generateToken(res, newUser._id)
      
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        d
      })
    }else{
      res.status(400).json({message: 'couldnt create user'})
    }


  } catch (error) {
    res.status(400).json({message: error.message})
  }

}


const logoutUser = async (req,res) => {
  res.status(200).json({message: 'auth user'})
}

export {
  authUser,
  registerUser,
  logoutUser
}