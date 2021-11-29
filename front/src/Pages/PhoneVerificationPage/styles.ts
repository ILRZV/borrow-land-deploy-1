import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },

  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  title: {
    fontSize: theme.typography.pxToRem(20),
    padding: theme.spacing(2),
  },

  registerBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '600px',
  },

  field: {
    border: `2px solid  ${theme.palette.primary.main}`,
    background: theme.palette.secondary.main,
    height: '40px',
    borderRadius: '10px',
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
  },

  link: {
    textDecoration: 'none',
  },

  text: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },

  btn: {
    borderRadius: '30px',
    textTransform: 'none',
    margin: theme.spacing(1),
    height: 48,
    width: '200px',
    color: theme.palette.primary.contrastText,
  },

  backBtn: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '30px',
    textTransform: 'none',
    margin: theme.spacing(1),
    height: 48,
    width: '200px',
  },
}))

export default useStyles
