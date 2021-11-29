import React from 'react'
import Box from '@mui/material/Box'
import LinkedButton from '../../../Components/LinkedButton'
import useStyles from './styles'

const WelcomePageButtons = () => {
  const classes = useStyles()
  return (
    <Box className={classes.Container}>
      <LinkedButton to={'/login'} text={'log in'} className={classes.btn} />
      <LinkedButton
        to={'/register'}
        text={'registration'}
        className={classes.btn}
      />
    </Box>
  )
}

export default WelcomePageButtons
