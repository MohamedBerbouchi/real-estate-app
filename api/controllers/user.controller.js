import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get users" });
  }
}

async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get user" });
  }
}
async function addUser(req, res) {
  try {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password, 10);
    console.log(hashedPassword);
    const user = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });
    const { password, ...userData } = user;
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create user" });
  }
}
async function updateUser(req, res) {
  const { password, username, email, avatar } = req.body;
  let hashedPassword = null;
  const userId = req.params.id;
  const tokenUserId = req.userId;
  if (userId !== tokenUserId) {
    return res.status(403).json({ message: "Not authorized" });
  }

  try {
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    const updatedUser = await prisma.user.update({
      where: { id:userId },
      data:{
        username,
        email,
        ...(hashedPassword && {password:hashedPassword}),
        ...(avatar && {avatar})
      }
    });
   
    const  {password: Upassword, ...userWithoutPassword} = updatedUser
    res.status(200).json(userWithoutPassword)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to update  user" });
  }
}
async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const userId = req.userId;

    // if(id !== userId){
    //      res.status(403).json({message:"forbidden operation"})
    // }
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "user deleted successfuly" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to delete user" });
  }
}


async function savePost(req, res){
  const postId = req.body.postId;
  const tokenUserID = req.userId

  try{
    const post = await prisma.savedPost.findUnique({
      where: {
        postId_userId:{
          postId : postId,
          userId : tokenUserID
        }
      } 
    })
    console.log(post)
    if(post){
      await prisma.savedPost.delete({
        where: {
          postId_userId:{
            postId : postId,
            userId : tokenUserID
          }
        } 
      })
      return  res.status(200).json({isSaved: false})

    }
     await prisma.SavedPost.create({
      data:{
        postId : postId,
        userId : tokenUserID
      }
    })
    return res.status(200).json({isSaved: true})
  }catch(err){
    console.log(err)
    res.status(500).json({ message: "failed to save the post" })
  }
}

async function profilePosts(req, res) {
  try {
    const tokenUser = req.userId

    const profilePosts = await prisma.user.findUnique({
    
      where:{
        id: tokenUser
      },
      select: {
        username: true,
        savedPosts:{  // Include savedPosts
          select :{
            post: true
          }
        },
        post: true, // Include posts
      }
    });
    res.status(200).json({savedPosts: profilePosts.savedPosts.map(p => p.post), userPosts: profilePosts.post});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get profile post" });
  }
}


// notification route 
// get count of user chat that not seen by user 

async function notification(req, res) {
  try {
    const tokenUser = req.userId
    const numberNotification = await prisma.chat.count({
      where:{
        usersIDs:{
          hasSome:[tokenUser]
        },
        NOT:{
          seenBy:{
            hasSome: [tokenUser]
          }
        }
      },
    });
    res.status(200).json(numberNotification);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get notification" });
  }
}
export default { getUsers, getUserById, addUser, deleteUser, updateUser,savePost,profilePosts,notification };
