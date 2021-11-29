import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  logoMobileLink: {
    fontSize: theme.typography.pxToRem(20),
    textDecoration: 'none',
    color: theme.palette.common.black,
    borderBottom: `3px solid transparent`,
    padding: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  link: {
    fontSize: theme.typography.pxToRem(15),
    padding: theme.spacing(2),
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    borderBottom: `3px solid transparent`,
    transition: '.3s',
    '&:hover': {
      borderBottom: `3px solid ${theme.palette.primary.main}`,
    },
  },
}))

export default useStyles
