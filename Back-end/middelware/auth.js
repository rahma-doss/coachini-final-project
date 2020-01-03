const jwt = require('jsonwebtoken');
const jwtSecret = 'secret';

module.exports= function(req, res, next){
    //get token from the header
    const token =  req.header('x-auth-token')
    //check if token exists
    if(!token){
        return res.json({msg: "No token access denied !"})  
    }

    //Returns the payload object in the request

    jwt.verify(token, jwtSecret, (err,decoded)=>{
        if(err) {
            res.json({msg: "Token Not Valid !"})
        }

        // Register:(Add new user exists in req)
        req.user = decoded.user

        next()
    })
}
