import jwt from 'jsonwebtoken'

// checks token through HTTP

const verifyToken = (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(403).json({message: 'Access Denied'})
  }

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
    const token = req.headers.authorization.split(" ")[1]


    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if(err){
        return res.status(403).json({message: 'token currupt'})
      } else {
        req.user = data
        next()
      }
    })
  }
}

export default verifyToken