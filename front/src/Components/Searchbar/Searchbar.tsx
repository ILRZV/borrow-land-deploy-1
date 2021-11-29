import React, { useContext } from 'react'
import useStyles from './styles'
import { Box, InputBase } from '@material-ui/core'
import { SearchContext } from '../../Contexts/SearchContext'

const SEARCHBAR_PLACEHOLDER = 'Search...'

const Searchbar = () => {
  const classes = useStyles()
  const { query, searchHandler } = useContext(SearchContext)

  return (
    <Box className={classes.searchbar}>
      <InputBase
        value={query}
        className={classes.searchInput}
        placeholder={SEARCHBAR_PLACEHOLDER}
        onChange={searchHandler}
      />
    </Box>
  )
}

export default React.memo(Searchbar)
