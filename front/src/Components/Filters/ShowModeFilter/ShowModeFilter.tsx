import * as React from 'react'
import Filter from '../../Filter/Filter'

const showModeList = ['Newest', 'Oldest']

const SHOW_MODE_FILTER_LABEL = 'Sort by date'

interface ShowModeFilterProps {
  multiple?: boolean
  reset?: boolean
  onChange: (value: string) => void
  className?: string
}

const ShowModeFilter = ({
  multiple,
  reset,
  onChange,
  className,
}: ShowModeFilterProps) => {
  return (
    <Filter
      id="showModeFilter"
      list={showModeList}
      multiple={multiple}
      label={SHOW_MODE_FILTER_LABEL}
      onChange={onChange}
      defaultValue={showModeList[0]}
      reset={reset}
      className={className}
    />
  )
}
export default React.memo(ShowModeFilter)
