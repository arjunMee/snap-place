// 2
import express from 'express'

// controll routers
import { getPosts, createPosts } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/', createPosts)

export default router

// all code shifted to 2.1

// export const getPosts = async (req, res) => {
//   try {
//     const post = await PostMessage.find({})
//     res.status(200).send(post)
//   } catch (error) {
//     res.status(404).send({ error: 'unable to complete the request' })
//   }
// }
// export const createPosts = async (req, res) => {
//   const post = req.body
//   try {
//     const newPost = new PostMessage(post)
//     await newPost.save()
//     res.status(201).send(newPost)
//   } catch (error) {
//     res.status(409).send({ error: 'unable to complete the request' })
//   }
// }
