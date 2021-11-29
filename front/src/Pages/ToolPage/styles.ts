import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    '& .Mui-error': {
      border: `2px solid ${theme.palette.error.main}`,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  filterBlock: {
    maxWidth: '610px',
    width: '55vw',
    minWidth: '305px',
    height: '200px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}))
export default useStyles
