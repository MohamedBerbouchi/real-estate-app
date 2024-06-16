import prisma from "../lib/prisma.js";
import { ObjectId } from "mongodb";

async function getChats(req, res) {
  const userId = req.userId
  try {
    
    const chats = await prisma.chat.findMany({
      where: {
        usersIDs: {
          hasSome: [userId]
        }
      },
      select:{
        id:true,
        lastMessage:true,
        seenBy:true,
        users:true
      }
    })
console.log(chats)

    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get chats" });
  }
}
async function getChatById(req, res) {
  const chatId = req.params.id;
  const userId = req.userId;
  if (!ObjectId.isValid(chatId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  try {
    
    const chat = await prisma.chat.findUnique({
      where:{
        id:chatId,
        usersIDs:{hasSome:[userId]}
      },
      include:{
        messages:true
      }
    })
    // update seen by 

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get chat " });
  }
}
async function addChat(req, res) {
  const userId = req.userId;
  const {receiverId} = req.body
  try {
    
    const chat = await prisma.chat.create({
      data:{
        usersIDs:[userId, receiverId],
        seenBy:[],
        lastMessage:''
      }
    })

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to add chat " });
  }
}
async function readChat(req, res) {
  const chatId = req.params.id;
  const userId = req.userId;

  try {
    const getChat = await prisma.chat.findUnique({
      where:{id: chatId, usersIDs:{
        hasSome:[userId]
      }},
      select: {seenBy:true}
    })
    if(getChat.seenBy.includes(userId)){
      return res.status(400).json({message: 'user already seen the chat'})
    }
    const chat = await prisma.chat.update({
      where:{id:chatId,usersIDs:{
        hasSome:[userId]
      } },
      data:{
        seenBy:{
          push: userId
        }
      }
    })    

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to read chat " });
  }
}




export default {getChats, getChatById,addChat ,readChat};
