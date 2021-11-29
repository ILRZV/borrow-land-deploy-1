import * as React from 'react'
import Filter from '../../Filter/Filter'

const statusList = ['Active', 'Inactive']

const STATUS_FILTER_LABEL = 'Status'

interface StatusFilterProps {
  multiple?: boolean
  reset?: boolean
  onChange: (value: string) => void
  className?: string
}

const StatusFilter = ({
  multiple,
  reset,
  onChange,
  className,
}: StatusFilterProps) => {
  return (
    <Filter
      id="statusFilter"
      list={statusList}
      multiple={multiple}
      label={STATUS_FILTER_LABEL}
      onChange={onChange}
      reset={reset}
      defaultValue={statusList[0]}
      className={className}
    />
  )
}
export default React.memo(StatusFilter)
