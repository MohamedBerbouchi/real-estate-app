import express from 'express'
import PostController from '../controllers/post.controller.js'
import {verifyAuth} from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', PostController.getPosts);
router.get('/:id', PostController.getPostById);
router.post('/',verifyAuth, PostController.addPost);
router.put('/:id', verifyAuth,PostController.updatePost);
router.delete('/:id',verifyAuth, PostController.deletePost);

export default router;