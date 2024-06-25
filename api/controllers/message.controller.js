import prisma from "../lib/prisma.js";
 
async function addMessage(req, res) {
  const userId = req.userId
  const chatId = req.params.chatId;
  const text =  req.body.text
  try {
    const chat = await prisma.chat.findUnique({
      where:{
        id:chatId,
        usersIDs:{hasSome:[userId]}
      }
    })
    if (!chat) return res.status(400).json({message:'chat not found'})

    const message = await prisma.message.create({
      data:{
        text:text,
        userId:userId,
        chatId: chatId
      }
    })
    
    // update chat last msg and seen by
    await prisma.chat.update({
      where:{
        id:chatId,
        usersIDs:{hasSome:[userId]}
      },
      data:{
        lastMessage: text,
        seenBy: [userId]
      }
    })
    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to add message " });
  }
}
 



export default {addMessage};
