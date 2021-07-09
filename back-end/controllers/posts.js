// 2.1
import { Mongoose } from 'mongoose'
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    const post = await PostMessage.find({})
    res.status(200).send(post)
  } catch (error) {
    res.status(404).send({ error: 'unable to complete the request' })
  }
}
export const createPosts = async (req, res) => {
  const post = req.body
  try {
    const newPost = new PostMessage(post)
    await newPost.save()
    res.status(201).send(newPost)
  } catch (error) {
    res.status(409).send({ error: 'unable to complete the request' })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.prams
  if (Mongoose.Type.ObjectId.isValid(_id))
    return res.status(404).send('no post with that id')

  PostMessage.findByIdAndUpdate(_id, post, { new: true })

  res.json(updatePost)
}

export const deletePosts = (req, res) => {
  res.send('THIS WORKS!')
}
export const patchPosts = (req, res) => {
  res.send('THIS WORKS!')
}
