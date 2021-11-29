import * as React from 'react'
import Filter from '../../Filter/Filter'

const locationList = [
  'Brest',
  'Vitebsk',
  'Gomel',
  'Grodno',
  'Minsk',
  'Mogilev',
  'Brest region',
  'Vitebsk region',
  'Gomel region',
  'Grodno region',
  'Minsk region',
  'Mogilev region',
]

export enum LocationData {
  'Brest' = 1,
  'Vitebsk',
  'Gomel',
  'Grodno',
  'Minsk',
  'Mogilev',
  'Brest region',
  'Vitebsk region',
  'Gomel region',
  'Grodno region',
  'Minsk region',
  'Mogilev region',
}

const LOCATION_FILTER_LABEL = 'Location'

interface LocationFilterProps {
  multiple?: boolean
  selected?: number
  reset?: boolean
  className?: string
  onChange: (value: string[]) => void
  isAllAvailable?: boolean
}

const LocationFilter = ({
  multiple,
  reset,
  onChange,
  selected,
  className,
  isAllAvailable,
}: LocationFilterProps) => {
  return (
    <Filter
      id="locationFilter"
      list={locationList}
      label={LOCATION_FILTER_LABEL}
      multiple={multiple}
      onChange={onChange}
      selectedItem={[LocationData[selected]]}
      reset={reset}
      className={className}
      isAllAvailable={isAllAvailable}
    />
  )
}

export default React.memo(LocationFilter)
