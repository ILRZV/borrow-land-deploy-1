import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  logoDesktopLink: {
    fontSize: theme.typography.pxToRem(20),
    textDecoration: 'none',
    color: theme.palette.common.black,
    borderBottom: `3px solid transparent`,
    padding: theme.spacing(2),
  },
  mobileMenu: {
    alignSelf: 'center',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  menu: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(2),
    height: '59px',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'flex',
    fontSize: theme.typography.pxToRem(14),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    flexDirection: 'column',
    justifyContent: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    borderBottom: `3px solid transparent`,
    transition: '.3s',
    '&:hover': {
      borderBottom: `3px solid ${theme.palette.primary.main}`,
    },
  },

  iconItem: {
    alignSelf: 'center',
    marginRight: theme.spacing(2),
  },

  avatarItem: {
    alignSelf: 'center',
    marginRight: theme.spacing(2),
    border: `2px solid ${theme.palette.grey[800]}`,
    borderRadius: '50%',
    transition: '.3s',
    '&:hover': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },

  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.grey[800],
    transition: '.3s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  avatar: {
    border: '2px solid',
  },

  active: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
}))

export default useStyles
