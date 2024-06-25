import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import prisma from "../lib/prisma.js";
async function register(req, res) {
  const { username, email, password } = req.body;
  // console.log(req.body)
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { username, email, password: hashPassword },
    });

    res
      .status(200)
      .json({ message: "user created successfully ", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to created a user" });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    //check user if exist
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      res.status(401).json({ message: "invalid credentials" });
      return
    }
    const { password: userPassword, ...userInfo } = user;
    //check password

    const validPassword = await bcrypt.compare(password, user.password);
   if(!validPassword){
    res.status(401).json({message:'invalid credentials'})
    return
   }
    // retunr user info with cookie
    const age = 1000 * 60 * 60 * 24 * 7
    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET,{expiresIn: age});
    res.cookie('token', token, {
        maxAge: age,
        httpOnly: true,
        // secure:true,
    }).json(userInfo)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to login" });
  }
}
function logout(req, res) {
  res.clearCookie('token').status(200).json({message:'logout successfully'})
}

export default { login, register, logout };
