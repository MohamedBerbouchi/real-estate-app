import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
async  function register(req, res){
    const {username, email, password} = req.body
// console.log(req.body)
   try{
    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword)
    const newUser = await prisma.user.create({
        data: {username, email, password: hashPassword}
    })
    
    res.status(200).json({message: 'user created successfully ', user: newUser})
   }catch(error){
    console.log(error)
    res.status(500).json({message: 'failed to created a user'})
   }
 
}
  
 function login(req, res){
    res.send('You amegos');

}
 function logout(req, res){
    res.send('You amegos');
}


export default {login,register,logout}