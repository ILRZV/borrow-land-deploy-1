import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '300px',
    width: '25%',
    minWidth: '260px',
    margin: '6px',
  },
  formControl: {
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.main,
    },
    maxWidth: '300px',
    width: '100%',
    minWidth: '225px',
    height: '70px',
  },
  default: {
    display: 'none',
  },
}))

export default useStyles
