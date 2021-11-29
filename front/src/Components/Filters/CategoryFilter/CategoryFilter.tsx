import * as React from 'react'
import Filter from '../../Filter/Filter'

const categoryList = [
  'Construction tools',
  'Domestic appliances',
  'Electronics',
  'Kitchen utensils',
  'Janitoral equipment',
  'Musical instruments',
  'Other',
]

export enum CategoryData {
  'Construction tools' = 1,
  'Domestic appliances',
  'Electronics',
  'Kitchen utensils',
  'Janitoral equipment',
  'Musical instruments',
  'Other',
}

const CATEGORY_FILTER_LABEL = 'Category'

interface CategoryFilterProps {
  multiple?: boolean
  reset?: boolean
  onChange: (value: string[]) => void
  selected?: number
  className?: string
  isAllAvailable?: boolean
}

const CategoryFilter = ({
  multiple,
  reset,
  onChange,
  selected,
  className,
  isAllAvailable,
}: CategoryFilterProps) => {
  return (
    <Filter
      multiple={multiple}
      list={categoryList}
      label={CATEGORY_FILTER_LABEL}
      onChange={onChange}
      selectedItem={[CategoryData[selected]]}
      reset={reset}
      className={className}
      isAllAvailable={isAllAvailable}
    />
  )
}

export default React.memo(CategoryFilter)
