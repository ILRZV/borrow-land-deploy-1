import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button, Typography } from '@material-ui/core'

import useStyles from './styles'
import { StatusBage } from '../StatusBage'
import { Link } from 'react-router-dom'
import { CategoryData } from '../Filters/CategoryFilter/CategoryFilter'
import { getFormattedDate } from '../../utils/getFormattedDate'
import getPicture from '../../utils/getPicture'

type RequestItemProps = {
  id: number
  name: string
  description: string
  picture?: string
  categoryId: number
  active: boolean
  startDate: Date | string
  endDate: Date | string
  address: string
}

const RequestItem = (props: RequestItemProps) => {
  const classes = useStyles()
  const dateFrom = `From ${String(props.startDate).slice(11, 16)} ${String(
    props.startDate
  ).slice(0, 10)}`
  const dateTo = `To ${String(props.endDate).slice(11, 16)} ${String(
    props.endDate
  ).slice(0, 10)}`
  const picture = getPicture(props.picture)

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <StatusBage isActive={props.active} />
        <CardMedia component="img" className={classes.img} image={picture} />

        <Box>
          <CardContent>
            <Typography component="div" variant="h5">
              {props.name}
            </Typography>
            <Typography component="div" className={classes.category}>
              {CategoryData[props.categoryId]}
            </Typography>
            <Typography component="div" className={classes.content}>
              {props.description}
            </Typography>
            <Box className={classes.date}>
              <Typography component="div" className={classes.dateTime}>
                <Box>Period of Use:&nbsp;</Box>
                <Box>{dateFrom}&nbsp;</Box>
                <Box>{dateTo}</Box>
              </Typography>
            </Box>
          </CardContent>
          <CardActions className={classes.actionBlock}>
            <Box>
              <Link
                to={`/requests/${props.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Button variant="outlined" color="primary">
                  More Details
                </Button>
              </Link>
            </Box>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default React.memo(RequestItem)
