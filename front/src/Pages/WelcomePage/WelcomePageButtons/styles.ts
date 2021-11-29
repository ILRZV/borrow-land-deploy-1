import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 30,
    width: `320px`,
    border: 0,
    color: 'white',
    height: 48,
    padding: theme.spacing(0, 1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: '0px 4px 13px -2px rgba(34, 60, 80, 0.11)',
    '&:hover': {
      color: 'black',
      backgroundColor: theme.palette.secondary.main,
      border: `4px solid ${theme.palette.primary.main}`,
    },
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default useStyles
