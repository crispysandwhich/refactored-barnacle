import jwt from 'jsonwebtoken'
import User from '../models/User.js'

// checks cookie

const protect = async (req, res, next) => {
  let token;

  // Setting token
  token = req.cookies.jwt 

  if(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-password')
      next()
    } catch (error) {
      res.status(401)
      throw new Error('not authroized')
    }
  } else {
    res.status(401)
    throw new Error('not authroized, no token')
  }


}

export {protect}