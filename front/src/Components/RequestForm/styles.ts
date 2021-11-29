import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& .MuiButton-contained': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '370px',
    width: '100%',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  periodBlock: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  requestBtn: {
    margin: theme.spacing(2),
    marginTop: 0,
  },

  error: {
    fontSize: theme.typography.pxToRem(10),
    textAlign: 'center',
    color: theme.palette.error.main,
    padding: theme.spacing(0.5),
  },
  success: {
    fontSize: theme.typography.pxToRem(10),
    textAlign: 'center',
    color: theme.palette.success.main,
    padding: theme.spacing(0.5),
  },
  errorBlock: {
    minHeight: '20px',
  },
}))

export default useStyles
