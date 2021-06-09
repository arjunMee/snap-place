import React from 'react'
import Post from './Post/Post.js'
import useStyles from './styles.js'

const Form = () => {
  const classes = useStyles()
  return (
    <>
      <h1>POSTs</h1>
      <Post />
      <Post />
    </>
  )
}

export default Form
