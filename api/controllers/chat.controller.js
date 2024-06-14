import prisma from "../lib/prisma.js";
async function getChats(req, res) {
  try {
    console.log('object')

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get chats" });
  }
}
async function getChatById(req, res) {
  try {
    
    console.log('object')

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get chat " });
  }
}
async function addChat(req, res) {
  try {
    console.log('object')
    

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to add chat " });
  }
}
async function readChat(req, res) {
  try {
    console.log('object')
    

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to read chat " });
  }
}




export default {getChats, getChatById,addChat ,readChat};
