import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  active: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    position: 'absolute',
    borderRadius: '5px 0',
  },
  error: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    position: 'absolute',
    borderRadius: '5px 0',
  },
}))

export default useStyles
