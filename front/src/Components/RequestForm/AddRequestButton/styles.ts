import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  wrapper: {
    position: 'fixed',
    bottom: '50px',
    right: '50px ',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
  },
  addBtn: {
    width: '60px',
    height: '60px',
  },
  icon: {
    color: theme.palette.common.white,
  },
}))
export default useStyles
