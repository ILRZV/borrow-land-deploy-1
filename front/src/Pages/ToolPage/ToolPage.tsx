import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyRepliesThunk } from '../../store/reducers/replyReducer'
import { MyRepliesList } from '../../Components/MyRepliesList'
import Loading from 'react-loading-animation'
import { SET_REQUESTS_ERROR_MESSAGE } from '../../store/action-creators/errorMessages'
import { Box, Typography } from '@material-ui/core'
import { getPageCount } from '../../utils/getPageCount'
import { PAGE_LIMIT } from '../../utils/constans'
import { AppPagination } from '../../Components/AppPagination'
import useStyles from '../RequestPage/styles'
import { getMyReplies } from '../../store/selectors/repliesSelector'

const ToolPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { myReplies, error, loading, totalCount } = useSelector(getMyReplies)
  const [page, setPage] = useState(1)
  const pageCount = getPageCount(totalCount, PAGE_LIMIT)

  useEffect(() => {
    dispatch(fetchMyRepliesThunk(page - 1, PAGE_LIMIT))
  }, [page])

  return (
    <Layout>
      {loading && <Loading />}
      {error === SET_REQUESTS_ERROR_MESSAGE && <Typography>{error}</Typography>}
      {!!myReplies.length && (
        <Box className={classes.root}>
          <MyRepliesList replies={myReplies} />
          <AppPagination page={page} pageCount={pageCount} setPage={setPage} />
        </Box>
      )}
    </Layout>
  )
}

export default React.memo(ToolPage)
