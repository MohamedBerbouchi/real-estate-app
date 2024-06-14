import express from  'express'
import { verifyAuth } from '../middleware/authMiddleware.js'
import messageController from '../controllers/message.controller.js'

const router = express.Router()

router.post('/:chatId',verifyAuth, messageController.addMessage)

export default router;