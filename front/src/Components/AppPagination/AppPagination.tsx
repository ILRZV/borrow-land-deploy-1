import React from 'react'
import Pagination from '@mui/material/Pagination'

export const AppPagination = ({ page, pageCount, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value)
  }

  return <Pagination count={pageCount} page={page} onChange={handleChange} />
}

export default React.memo(AppPagination)
