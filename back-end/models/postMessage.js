// 3
import mongoose from 'mongoose'

// creating schema of post
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

// converting here in models
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
