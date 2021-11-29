import React, { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Box, IconButton } from '@material-ui/core'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import useStyles from './styles'
import { MenuLinks } from '../MenuLinks'

export const MenuMobile = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const renderMobileMenu = MenuLinks.map((link) => (
    <NavLink
      to={link.to}
      activeClassName={classes.active}
      className={classes.link}
      key={link.id}
      onClick={handleClose}
    >
      {link.text}
    </NavLink>
  ))

  return (
    <Box>
      <IconButton
        className="classes.mobileMenu"
        onClick={handleClick}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={handleClose}>
        <Link
          to="/main"
          className={classes.logoMobileLink}
          onClick={handleClose}
        >
          BorrowLand
        </Link>
        <Divider />
        {renderMobileMenu}
      </Drawer>
    </Box>
  )
}

export default React.memo(MenuMobile)
