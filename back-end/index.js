// 1
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import usePost from './routers/posts.js'

const app = express()
dotenv.config()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', usePost)

app.get('/', (req, res) => {
  res.send('hello to snap place')
})
// const CONNECTION_URL =
//   'mongodb+srv://snap-place:snap-place123@cluster0.kd9pv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log('server running on PORT : ' + PORT))
  })
  .catch((error) => {
    console.log(error)
  })

mongoose.set('useFindAndModify', false)
// 1
