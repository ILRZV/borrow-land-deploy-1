import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  map: {
    width: '80vw',
    height: '75vh',
  },
})

export default useStyles
