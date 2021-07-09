import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#aa3333',
  },
  image: {
    marginLeft: '15px',
  },
  createButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    padding: '10px 40px',
    fontSize: '18px',
    color: '#aa3333',
  },
}))
