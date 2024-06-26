import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
async function getPosts(req, res) {
  const { bedroom, property, type, location, minPrice, MaxPrice } = req.query;
  try {
    console.log(req.query);
    const posts = await prisma.post.findMany({
      where: {
        bedroom: bedroom || undefined,
        property: property || undefined,
        type: type || undefined,
        city: {
          contains: location ? location.trim().toLowerCase() : undefined,
          mode: "insensitive",
        },
        ...(minPrice && { price: { gte: parseInt(minPrice) } }),
        ...(MaxPrice && { price: { lte: parseInt(MaxPrice) } }),
        //  price:{
        //   gte: minPrice || 0,
        //   lte : MaxPrice || 100000
        //  }
      },
    });
    console.log(posts);

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get posts" });
  }
}
async function getPostById(req, res) {
  try {
    const id = req.params.id;
    console.log(typeof id);
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const posts = await prisma.post.findUnique({
      where: { id },
      include: {
        PostDetail: true,
        user: {
          select: {
            id:true,
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (!err) {
          const isSaved = await prisma.SavedPost.findUnique({
            where: {
              postId_userId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({...posts, isSaved: !!isSaved});
        }  
      });
    }else{

      res.status(200).json({...posts, isSaved: false});
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get Post" });
  }
}
async function addPost(req, res) {
  try {
    const body = req.body;
    const userId = req.userId;
    const postInfo = body.post;
    const postDetails = body.PostDetail;

    const post = await prisma.post.create({
      data: {
        ...postInfo,
        userId: userId,
        PostDetail: {
          create: postDetails,
        },
      },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create Post" });
  }
}
async function updatePost(req, res) {
  try {
    console.log("object");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to update Posts" });
  }
}
async function deletePost(req, res) {
  try {
    const id = req.params.id;
    const userId = req.userId;
    // if(userId === post.userId)
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return res.status(403).json({ message: "post doesnt exist" });
    }
    // if (post.userId !== userId) {
    //   return res.status(402).json({ message: "Not Allowed to delete post" });
    // }
    await prisma.post.delete({
      where: { id },
    });
    res.status(200).json({ message: "post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to delete Post" });
  }
}

export default { getPosts, getPostById, addPost, deletePost, updatePost };
