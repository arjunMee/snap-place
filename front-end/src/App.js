import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { getPosts } from './actions/posts'
import useStyles from './styles'
import memories from './images/memories.png'

const App = () => {
  const [visible, setVisible] = useState(false)
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h3' align='center'>
          Snap Place
        </Typography>
        <img className={classes.image} src={memories} alt='icon' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            direction='column-reverse'
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            {visible ? (
              <Grid item>
                <Form
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                  visible={setVisible}
                />
              </Grid>
            ) : (
              <div className={classes.createButton}>
                <button
                  className={classes.buttonStyle}
                  onClick={() => setVisible(true)}
                >
                  Create New Post
                </button>
              </div>
            )}
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
