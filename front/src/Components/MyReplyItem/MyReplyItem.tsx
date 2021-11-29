import React from 'react'
import Box from '@mui/material/Box'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'
import { StatusBage } from '../StatusBage'

import getPicture from '../../utils/getPicture'
import ConfirmPopup from '../ConfirmPopup'

interface MyRepliesItemProps {
  picture?: string
  text: string
  requestId: number
}

const MyReplyItem = (props: MyRepliesItemProps) => {
  const classes = useStyles()

  const picture = getPicture(props.picture)

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <StatusBage isActive={true} />
        <CardMedia component="img" className={classes.img} image={picture} />
        <Box>
          <CardContent>
            <Typography component="div" variant="h6">
              {props.text}
            </Typography>
          </CardContent>
          <CardActions className={classes.actionBlock}>
            <Box>
              <Link
                to={`/requests/${props.requestId}`}
                className={classes.link}
              >
                <Button variant="outlined" color="primary">
                  More Details
                </Button>
              </Link>
            </Box>
            <Box className={classes.deleteBtn}>
              <ConfirmPopup />
            </Box>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default React.memo(MyReplyItem)
