import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import Searchbar from '../Searchbar'
import { MenuBar } from '../Menu/MenuBar'
import { RequestCreateForm } from '../RequestCreateForm'
import { AddRequestButton } from '../RequestForm/AddRequestButton'
import { useToggle } from 'react-use'

interface LayoutProps {
  children: React.ReactNode
  filterBlock?: React.ReactElement
  resetFiltersBtn?: React.ReactElement
}

const Layout = ({ children, filterBlock, resetFiltersBtn }: LayoutProps) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <MenuBar />
      </Grid>
      <Grid item xs={12}>
        <Searchbar />
      </Grid>
      <Grid item xs={12}>
        {filterBlock}
      </Grid>
      <Grid item xs={12}>
        {resetFiltersBtn}
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
      >
        {children}
      </Grid>
      <RequestCreateForm open={isOpen} onClose={setIsOpen} />
      <AddRequestButton onClick={setIsOpen} />
    </Grid>
  )
}

export default Layout
