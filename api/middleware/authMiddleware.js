import jwt from 'jsonwebtoken'

export function verifyAuth(req , res, next){

    const token = req.cookies.token
    //check if token exist
    if(!token){
        res.status(403).json({message: 'not authenticated'})
    }

    //verify token
     jwt.verify(token, process.env.JWT_SECRET,   (err, payload)=>{
       console.log(err)
       if(err){
        res.status(403).json({message: 'invalid token'})
       }
    // add token payload to request
       req.userId = payload.id
    })
    // next  
    next()
}