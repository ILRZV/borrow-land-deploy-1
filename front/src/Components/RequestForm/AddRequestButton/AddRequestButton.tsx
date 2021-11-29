import React from 'react'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'

import useStyles from './styles'

interface RequestButtonProps {
  onClick: () => void
}

export const RequestButton = ({ onClick }: RequestButtonProps) => {
  const classes = useStyles()

  return (
    <Box>
      <div className={classes.wrapper}>
        <IconButton className={classes.addBtn} onClick={onClick}>
          <AddIcon className={classes.icon} />
        </IconButton>
      </div>
    </Box>
  )
}
export default React.memo(RequestButton)
