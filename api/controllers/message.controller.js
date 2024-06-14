import prisma from "../lib/prisma.js";
 
async function addMessage(req, res) {
  try {
    console.log('object')

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to add message " });
  }
}
 



export default {addMessage};
