import Box from '@mui/material/Box'
import React, { useMemo } from 'react'
import useStyles from './styles'
import { RequestItem } from '../RequestItem'
import { Request } from '../../store/types/request'

interface RequestListProps {
  requestsList: Request[]
}

export const RequestList = ({ requestsList }: RequestListProps) => {
  const classes = useStyles()

  const renderList = useMemo(
    () =>
      requestsList.map((request: Request) => (
        <RequestItem
          key={request.id}
          id={request.id}
          name={request.name}
          description={request.description}
          picture={request.picture}
          categoryId={request.categoryId}
          active={request.active}
          startDate={request.startDate}
          endDate={request.endDate}
          address={request.address}
        />
      )),
    [requestsList]
  )

  return <Box className={classes.list}>{renderList}</Box>
}

export default React.memo(RequestList)
