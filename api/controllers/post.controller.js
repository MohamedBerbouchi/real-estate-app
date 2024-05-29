import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
async function getPosts(req, res) {
  try {
     const posts = await prisma.post.findMany()
     res.status(500).json(posts)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get posts" });
  }
}
async function getPostById(req, res) {
  try {
    const id = req.params.id
    const posts = await prisma.post.findUnique({where:{id}})
    res.status(500).json(posts)
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get Post" });
  }
}
async function addPost(req, res) {
  try {
   const body = req.body
   const userId = req.userId
   console.log(body)
   
   const post = await prisma.post.create({
    data:{
      ...body,
      userId : userId
    }
   })
   res.status(200).json(post)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create Post" });
  }
}
async function updatePost(req, res) {
  try {
    console.log('object')

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to update Posts" });
  }
}
async function deletePost(req,  res) {
  try {
    const id = req.params.id
    const userId = req.userId
    // if(userId === post.userId)
    const post = await prisma.post.findUnique({where:{id}})
    console.log(post)
    console.log(post.userId)
    if(post.userId !== userId){
      res.status(402).json({message: "Not Allowed to delete user"})
    }
     await prisma.post.delete({
      where : {id}
     })
    res.status(200).json({message: 'user deleted'})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to delete Post" });
  }
}

export default { getPosts, getPostById, addPost, deletePost, updatePost };