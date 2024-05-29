import jwt from 'jsonwebtoken'
async function mustBeLogin(req , res){

    const token = req.cookies.token
    //check if token exist
    console.log(token)
    if(!token){
        res.status(403).json({message: 'not authenticated'})
    }

    //verify token
     jwt.verify(token, process.env.JWT_SECRET, async (err, payload)=>{
       console.log(err)
       if(err){
        res.status(403).json({message: 'invalid token'})
       }
    // add token payload to request
       req.userId = payload.id

    })

    // next  
}
async function mustBeAdmin(req , res){

    const token = req.cookies.token
    //check if token exist
    console.log(token)
    if(!token){
        res.status(403).json({message: 'not authenticated'})
    }

    //verify token
     jwt.verify(token, process.env.JWT_SECRET, async (err, payload)=>{
       console.log(err)
       if(err){
        res.status(403).json({message: 'invalid token'})
       }
    // add token payload to request
       req.userId = payload.id
       req.isAdmin = true
       res.json(req)

    })

    // next 
}

export default {mustBeAdmin, mustBeLogin}