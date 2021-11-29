import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import { Box, Button, Typography } from '@material-ui/core'
import {
  CategoryFilter,
  LocationFilter,
  ShowModeFilter,
} from '../../Components/Filters'
import { SearchContext } from '../../Contexts/SearchContext'
import { Request } from '../../store/types/request'
import { CategoryData } from '../../Components/Filters/CategoryFilter/CategoryFilter'
import { LocationData } from '../../Components/Filters/LocationFilter/LocationFilter'
import { RequestList } from '../../Components/RequestList'
import { fetchFilteredRequests } from '../../services/api/requests'
import { getMappedRequests } from '../../mapping/getMappedRequests'
import useStyles from './styles'
import {
  MODE_DEFAULT_STATE,
  NO_ITEMS_FOUND_MESSAGE,
  RESET_FILTERS_BTN,
} from '../../utils/requestPagesConstants'
import { PAGE_LIMIT } from '../../utils/constans'
import { getPageCount } from '../../utils/getPageCount'
import { AppPagination } from '../../Components/AppPagination'

const ACTIVE_STATE = true

const AllRequestsPage = () => {
  const classes = useStyles()
  const { query, searchHandler } = useContext(SearchContext)
  const [filteredData, setFilteredData] = useState<Request[]>([])
  const [noItemsMessage, setNoItemsMessage] = useState('')

  const [locationId, setLocationId] = useState<number[]>([])
  const [categoryId, setCategoryId] = useState<number[]>([])
  const [mode, setMode] = useState(MODE_DEFAULT_STATE)
  const [reset, setReset] = useState(false)
  const [totalRequestsCount, setTotalRequestsCount] = useState(0)

  const [page, setPage] = useState(1)
  const pageCount = getPageCount(totalRequestsCount, PAGE_LIMIT)

  useEffect(() => {
    ;(async () => {
      setNoItemsMessage('')
      setReset(false)
      const response = await fetchFilteredRequests(
        false,
        locationId,
        categoryId,
        mode,
        ACTIVE_STATE,
        query,
        page - 1,
        PAGE_LIMIT
      )
      if (response.data.rows.length) {
        setTotalRequestsCount(response.data.count)
        setFilteredData(getMappedRequests(response.data.rows))
      } else {
        setNoItemsMessage(NO_ITEMS_FOUND_MESSAGE)
        setFilteredData([])
      }
    })()
  }, [locationId, categoryId, mode, query, reset, page])

  const handleCategory = (value: string[]) => {
    const result: number[] = value.map((item) => CategoryData[item])
    setCategoryId(result)
  }

  const handleLocation = (value: string[]) => {
    const result: number[] = value.map((item) => LocationData[item])
    setLocationId(result)
  }

  const resetFiltersBlock = () => {
    setReset(true)
    searchHandler('')
  }

  return (
    <Layout
      filterBlock={
        <Box className={classes.filterBlock}>
          <CategoryFilter multiple reset={reset} onChange={handleCategory} />
          <LocationFilter multiple reset={reset} onChange={handleLocation} />
          <ShowModeFilter reset={reset} onChange={setMode} />
        </Box>
      }
      resetFiltersBtn={
        <Button
          className={classes.resetBtn}
          onClick={resetFiltersBlock}
          variant="contained"
        >
          {RESET_FILTERS_BTN}
        </Button>
      }
    >
      <Typography>{noItemsMessage}</Typography>
      <RequestList requestsList={filteredData} />
      <AppPagination page={page} pageCount={pageCount} setPage={setPage} />
    </Layout>
  )
}

export default AllRequestsPage
