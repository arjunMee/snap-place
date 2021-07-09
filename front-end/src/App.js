import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPost } from './actions/posts.js'

import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import placeIcon from './images/eiffel-tower.jpg'

import useStyles from './styles.js'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost())
  }, [dispatch, currentId])

  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography varaint='h2' align='center'>
          Snap Place
        </Typography>
        <img
          className={classes.image}
          src={placeIcon}
          alt='place'
          height='60'
        />
      </AppBar>

      {/* grow have animation */}
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
