import React, { useMemo } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useStyles from './styles'

interface StatusItem {
  isActive?: boolean
}

export const StatusBage = ({ isActive = false }: StatusItem) => {
  const classes = useStyles()

  const renderBage = useMemo(
    () =>
      isActive ? (
        <Typography component="div" variant="h5" className={classes.active}>
          ACTIVE
        </Typography>
      ) : (
        <Typography component="div" variant="h5" className={classes.error}>
          INACTIVE
        </Typography>
      ),
    [isActive]
  )
  return <Box>{renderBage}</Box>
}
export default React.memo(StatusBage)
