import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  list: {
    marginTop: theme.spacing(10),
  },
}))

export default useStyles
