import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  filterBlock: {
    maxWidth: '850px',
    width: '50vw',
    maxHeight: '320px',
    minHeight: '60px',
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  resetBtn: {
    maxWidth: '300px',
    width: '60%',
    height: '50px',
    minWidth: '225px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

export default useStyles
