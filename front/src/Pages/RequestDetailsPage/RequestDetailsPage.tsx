import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from 'react-loading-animation'
import { Container } from '@material-ui/core'
import Box from '@mui/material/Box'
import { useEffectOnce, useToggle } from 'react-use'
import { Button, Typography } from '@material-ui/core'

import useSelector from '../../hooks/useSelector'
import useActions from '../../hooks/useActions'
import Layout from '../../Components/Layout'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import useStyles from './styles'
import { CategoryData } from '../../Components/Filters/CategoryFilter/CategoryFilter'
import {
  getRequestById,
  getRequests,
} from '../../store/selectors/requestSelector'
import { getUserId } from '../../store/selectors/userSelector'
import { getFormattedDate } from '../../utils/getFormattedDate'
import { RequestEditForm } from '../../Components/RequestEditForm/'
import getPicture from '../../utils/getPicture'
import { RepliesForm } from '../../Components/RepliesForm'

const ARCHIVE_BTN_LABEL = 'Archive'
const RESUME_BTN_LABEL = 'Resume'
const EDIT_BTN_LABEL = 'Edit'
const LEND_A_HAND_BTN_LABEL = 'Lend a hand'

const RequestDetailsPage = () => {
  const classes = useStyles()
  const [editForm, setEditForm] = useToggle(false)
  const [replyForm, setReplyForm] = useToggle(false)
  const [archive, setArchive] = useToggle(true)
  const { requestId } = useParams<{ requestId: string }>()
  const { requests, loading, error } = useSelector(getRequests)
  const { fetchRequest, archiveUserRequest } = useActions()
  const user = useSelector(getUserId)
  const request = getRequestById(requests, requestId)

  useEffectOnce(() => {
    fetchRequest(requestId)
    if (!request) {
      setArchive(true)
    } else {
      setArchive(request.active)
    }
  })

  const handleArchive = () => {
    archiveUserRequest(requestId)
    setArchive(!request.active)
  }

  return (
    <Container>
      {loading && <Loading />}
      {error && <Typography>{error}</Typography>}
      {request && (
        <Layout>
          <Box>
            <Box className={classes.header}>
              <Typography component="div" className={classes.dateTime}>
                <AccessTimeIcon />
                {getFormattedDate(request.createdAt)}
              </Typography>
              <Box>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.requestBtn}
                  onClick={setEditForm}
                >
                  {EDIT_BTN_LABEL}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.requestBtn}
                  onClick={handleArchive}
                >
                  {archive ? ARCHIVE_BTN_LABEL : RESUME_BTN_LABEL}
                </Button>
              </Box>
            </Box>
            <img src={getPicture(request.picture)} className={classes.img} />
            <Typography component="h4" variant="h4">
              {request.name}
            </Typography>
            <Typography className={classes.content}>
              {CategoryData[request.categoryId]}
            </Typography>
            <Typography>{request.description}</Typography>
            <Typography className={classes.content}>Period of use:</Typography>
            <Typography>
              {getFormattedDate(request.startDate)} -{' '}
              {getFormattedDate(request.endDate)}
            </Typography>
            <Button variant="outlined" color="primary">
              VIEW RESPONSES
            </Button>
            <Button
              color="primary"
              onClick={setReplyForm}
              variant="outlined"
              className={classes.replyBtn}
              disabled={user === request.UserId}
            >
              {LEND_A_HAND_BTN_LABEL}
            </Button>
          </Box>
          <RequestEditForm
            open={editForm}
            onClose={setEditForm}
            requestData={request}
            id={requestId}
          />
          <RepliesForm
            open={replyForm}
            onClose={setReplyForm}
            requestId={requestId}
          />
        </Layout>
      )}
    </Container>
  )
}

export default React.memo(RequestDetailsPage)
