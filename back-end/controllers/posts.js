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

export const deletePosts = (req, res) => {
  res.send('THIS WORKS!')
}
export const patchPosts = (req, res) => {
  res.send('THIS WORKS!')
}
