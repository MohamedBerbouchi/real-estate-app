import express from  'express'
import chatController from '../controllers/chat.controller.js'
import { verifyAuth } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', verifyAuth,chatController.getChats)
router.get('/:id',verifyAuth, chatController.getChatById)
router.post('/',verifyAuth, chatController.addChat)
router.put('/read/:id',verifyAuth, chatController.readChat)

export default router;