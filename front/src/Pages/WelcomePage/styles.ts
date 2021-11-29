import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  WelcomePage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'aliceblue',
  },
  WelcomeTitle: {
    marginBottom: '26px',
  },
  btn: {
    width: '320px',
    height: '50px',
    margin: '9px 0',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: theme.palette.secondary.main,
    fontSize: '20px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.25s linear',
  },
}))

export default useStyles
