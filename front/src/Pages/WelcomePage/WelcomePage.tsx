import React from 'react'
import WelcomePageButtons from './WelcomePageButtons/WelcomePageButtons'
import useStyles from './styles'

const WelcomePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.WelcomePage}>
      <h1 className={classes.WelcomeTitle}>Welcome to the BorrowLand!</h1>
      <WelcomePageButtons />
    </div>
  )
}

export default WelcomePage
