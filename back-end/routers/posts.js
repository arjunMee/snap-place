import express from 'express'

// controll routers
import { getPosts, createPosts } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/', createPosts)

export default router
