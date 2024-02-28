const jwt  = require("jsonwebtoken")

const authMiddleware = (req, res, next)=> {
  

  const authHeader =  req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer ')){
      
    
      return res.status(403).json({msg : "hell-1"})
  }

    const  token =  authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, "secret")
      //  req.UserId = decoded.UserId  
      //  next();
      
     // console.log(decoded.UserId)
     
      if( decoded.UserId){
        req.UserId = decoded.UserId
        next();
      }
    } catch (error) {
        console.log("the error is :  " , error)
        return res.status(403)

    }
}

module.exports = { 
    authMiddleware
}