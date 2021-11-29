import React, { memo, useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useStyles } from './styles'
import { useEffectOnce } from 'react-use'
import { Box } from '@material-ui/core'

const All_SELECT_VALUE = 'All'
const EMPTY_STRING = ''

interface FilterProps {
  id?: string
  label?: string
  style?: string
  multiple?: boolean
  list: string[]
  selectedItem?: string[]
  onChange: (value: string | string[]) => void
  reset?: boolean
  defaultValue?: string
  className?: string
  isAllAvailable?: boolean
}

const Filter = ({
  id = '',
  label = '',
  style = '',
  multiple = false,
  list,
  selectedItem = [],
  onChange,
  reset,
  defaultValue,
  className,
  isAllAvailable = true,
}: FilterProps) => {
  const classes = useStyles()
  const [categoryUnit, setCategoryUnit] = useState<typeof list>(selectedItem)

  const handleChange = (event: SelectChangeEvent<typeof list>) => {
    const {
      target: { value },
    } = event

    if (value.includes('') && !defaultValue && multiple) {
      onChange(list)
      return setCategoryUnit(list)
    }

    onChange(value)
    typeof value === 'string'
      ? setCategoryUnit([value])
      : setCategoryUnit(value)
  }

  useEffectOnce(() => {
    if (defaultValue) {
      return setCategoryUnit([defaultValue])
    }
    setCategoryUnit([])
  })

  useEffect(() => {
    if (reset) {
      if (defaultValue) {
        onChange(defaultValue)
        return setCategoryUnit([defaultValue])
      }
      setCategoryUnit([])
      onChange([])
    }
  }, [reset])

  const renderList = list.map((listUnit: string) => (
    <MenuItem key={listUnit} value={listUnit}>
      <ListItemText primary={listUnit} />
    </MenuItem>
  ))

  return (
    <Box className={classes.root}>
      <FormControl id={id} className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple={multiple}
          value={categoryUnit}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) =>
            multiple ? selected.join(', ') : categoryUnit
          }
        >
          {renderList}
          {isAllAvailable && (
            <MenuItem
              disabled={!!defaultValue || !multiple}
              value={EMPTY_STRING}
            >
              {All_SELECT_VALUE}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  )
}

export default memo(Filter)
