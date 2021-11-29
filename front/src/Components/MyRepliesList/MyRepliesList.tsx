import Box from '@mui/material/Box'
import React, { useMemo } from 'react'
import useStyles from './styles'
import { MyReplyItem } from '../MyReplyItem'
import { Reply } from '../../store/types/replies'

interface MyRepliesListProps {
  replies: Reply[]
}

export const MyRepliesList = ({ replies }: MyRepliesListProps) => {
  const classes = useStyles()

  const renderRepliesList = useMemo(
    () =>
      replies.map((reply: Reply) => (
        <MyReplyItem
          key={reply.id}
          text={reply.text}
          requestId={reply.requestId}
          picture={reply.request.picture}
        />
      )),
    [replies]
  )

  return <Box className={classes.list}>{renderRepliesList}</Box>
}

export default React.memo(MyRepliesList)
