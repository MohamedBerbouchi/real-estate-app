import express from 'express'
import UserController from '../controllers/user.controller.js'
import {verifyAuth} from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.addUser);
router.put('/:id',verifyAuth, UserController.updateUser);
router.delete('/:id',verifyAuth, UserController.deleteUser);

export default router;