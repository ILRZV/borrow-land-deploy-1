import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    '& .MuiCardMedia-img': {
      backgroundSize: 'contain',
      width: '250px',
      height: '200px',
      objectFit: 'contain',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    position: 'relative',
    width: '70vw',
  },
  card: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  img: {
    margin: theme.spacing(2),
    height: 'auto',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginBottom: theme.spacing(5),
    },
  },
  active: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.success.main,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    position: 'absolute',
    borderRadius: '5px 0',
  },
  link: {
    textDecoration: 'none',
  },
  actionBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'left',
    },
  },
  deleteBtn: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(1),
  },
}))

export default useStyles
