import React from 'react'
import useStyles from './styles.js'
import {
  Card,
  CardAction,
  CardContent,
  CardMedia,
  Button,
  Typographu,
} from '@material-ui/core'

import ThumbupAltIcon from '@material-ui/icon/thumpUpAlt'
import DeleteIcon from '@material/core/MoreHpriz'
import moment from 'moment'

const Post = ({ post }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectFile}
        title={post}
      />
      <div className={classes.overlay}>
        <typography variant='h6'>{post.create}</typography>
        <typography variant='body2'>{moment(post.createdAt)}</typography>
      </div>
      <div></div>
    </Card>
  )
}

export default Post
