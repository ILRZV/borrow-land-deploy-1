import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  searchbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '460px',
    width: '25vw',
    minWidth: '225px',
    marginTop: theme.spacing(10),
    height: '56px',
    boxShadow:
      '0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.2)',
    padding: theme.spacing(2),
    borderRadius: 4,
  },
  searchInput: {
    width: '90%',
  },
  searchIcon: {
    cursor: 'pointer',
  },
}))

export default useStyles
