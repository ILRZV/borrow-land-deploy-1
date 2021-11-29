import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'
import { alpha } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  uploadBtn: {
    textTransform: 'none',
    borderRadius: '5px',
    border: '1px dashed',
    padding: theme.spacing(2),
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.3s',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  input: {
    display: 'none',
  },
  preview: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: '8px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '200px',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    transition: '.3s',
  },
  hideBtn: {
    display: 'none',
  },
  removeText: {
    textTransform: 'uppercase',
  },
  removeLayer: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    visibility: 'visible',
    background: alpha(theme.palette.primary.main, 0.6),
    color: theme.palette.common.white,
    opacity: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.2s',
    '&:hover': {
      opacity: '1',
    },
  },
  error: {
    fontSize: theme.typography.pxToRem(10),
    textAlign: 'center',
    color: theme.palette.error.main,
    padding: theme.spacing(0.5),
  },
}))
export default useStyles
