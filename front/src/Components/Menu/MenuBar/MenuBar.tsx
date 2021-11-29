import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppBar, Box } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import useStyles from './styles'
import MenuMobile from '../MenuMobile/MenuMobile'
import { MenuUser } from '../../MenuUser/MenuUser'
import { MenuLinks } from '../MenuLinks'

const boxProperty = {
  bgcolor: 'secondary.main',
  display: 'flex',
}

export const MenuBar = () => {
  const classes = useStyles()

  const renderDesktopMenu = MenuLinks.map((link) => (
    <NavLink
      to={link.to}
      activeClassName={classes.active}
      className={classes.link}
      key={link.id}
    >
      {link.text}
    </NavLink>
  ))

  return (
    <Box sx={boxProperty}>
      <AppBar className={classes.menu}>
        <div className={classes.menuItem}>
          <Link to="/main" className={classes.logoDesktopLink}>
            BorrowLand
          </Link>
          {renderDesktopMenu}
        </div>

        <div className={classes.mobileMenu}>
          <MenuMobile />
        </div>

        <div className={classes.icons}>
          <div className={classes.iconItem}>
            <Link to="#" className={classes.icon}>
              <ModeCommentOutlinedIcon />
            </Link>
            <Link to="#">
              <NotificationsNoneOutlinedIcon className={classes.icon} />
            </Link>
          </div>

          <Box className={classes.avatarItem}>
            <MenuUser />
          </Box>
        </div>
      </AppBar>
    </Box>
  )
}

export default React.memo(MenuBar)
