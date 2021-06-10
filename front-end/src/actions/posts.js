import * as api from '../api'

// api.fetchPost

// action creater
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: 'FATCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message)
  }
  // const action = { type: 'FATCH_ALL', payload: [] }
}
