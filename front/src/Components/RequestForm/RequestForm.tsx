import React, { useState, memo } from 'react'
import { useEffectOnce } from 'react-use'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog'
import { Typography } from '@material-ui/core'

import useStyles from './styles'
import { CategoryFilter } from '../Filters/CategoryFilter'
import { FileUploader } from '../FileUploader'
import { CreateRequestType } from '../../services/types'
import LocationFilter, {
  LocationData,
} from '../Filters/LocationFilter/LocationFilter'
import { CategoryData } from '../Filters/CategoryFilter/CategoryFilter'
import useActions from '../../hooks/useActions'
import { RequestFormValidationScheme as scheme } from './utils'

interface RequestFormProps {
  onClose: () => void
  open: boolean
  requestData?: RequestForm
  id?: string | number
  dateFrom: Date
  dateTo: Date
  submitBtnName: string
  formName: string
}

export interface RequestForm {
  name: string
  categoryId: number
  locationId: number
  description?: string
  address: string
  dateFrom: Date
  dateTo: Date
  img?: string
}

const uploadBtmName = 'UPLOAD IMAGE'
const ERROR_FAILED_SEND_MESSAGE = 'Something went wrong. Please try again later'

export const RequestForm = ({
  onClose,
  open,
  requestData,
  id,
  dateFrom,
  dateTo,
  submitBtnName,
  formName,
}: RequestFormProps) => {
  const classes = useStyles()
  const [startDate, setStartDate] = useState(dateFrom)
  const [endDate, setEndDate] = useState(dateTo)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [category, setCategory] = useState()
  const [location, setLocation] = useState()
  const [picture, setPicture] = useState()
  const { addRequest, changeRequest } = useActions()

  useEffectOnce(() => {
    setCategory(requestData?.categoryId)
    setLocation(requestData?.locationId)
  })

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateRequestType>({ mode: 'onChange' })

  const handleCategory = (value: string[]) => {
    setCategory(CategoryData[value])
  }

  const handleLocation = (value: string[]) => {
    setLocation(LocationData[value])
  }

  const handleUpload = (e) => {
    if (typeof e === 'string') {
      setPicture(e)
    } else {
      setPicture(e.target.files[0])
    }
  }

  const onSubmit = async () => {
    const request: RequestForm = {
      name: getValues('title'),
      categoryId: category,
      locationId: location,
      description: getValues('description'),
      address: getValues('address'),
      startDate: new Date(
        `${getValues('dateFrom')}T${getValues('timeFrom')}:00`
      ),
      endDate: new Date(`${getValues('dateTo')}T${getValues('timeTo')}:00`),
    }

    if (picture) {
      request.img = picture
    }

    const formData = new FormData()

    for (let key in request) {
      formData.append(key, request[key])
    }

    const response = id ? changeRequest(formData, id) : addRequest(formData)
    if (!response) {
      setErrorMessage('Oops, something went wrong while handling :(')
      setSuccessMessage('')
    } else {
      setErrorMessage('')
      setSuccessMessage('Congrats! Request was successfully handled')
      handleClose()
      reset()
    }
  }

  const handleClose = () => {
    reset()
    setErrorMessage('')
    setSuccessMessage('')
    return onClose()
  }

  const disable = !isDirty || !isValid || !category || !location

  const validateDate = () =>
    new Date(`${getValues('dateFrom')}T${getValues('timeFrom')}:00`) <=
      new Date(`${getValues('dateTo')}T${getValues('timeTo')}:00`) ||
    'Invalid date. Please check'

  return (
    <Dialog open={open} onClose={handleClose}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.root}>
          <DialogTitle>{formName}</DialogTitle>
          <DialogContent>
            <Box className={classes.input}>
              <TextField
                label="Title"
                defaultValue={requestData?.name}
                {...register('title', scheme.title)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}>
                  {errors.title?.message}
                </Typography>
              </Box>

              <CategoryFilter
                onChange={handleCategory}
                selected={requestData?.categoryId}
                isAllAvailable={false}
              />
              <Box className={classes.errorBlock}></Box>

              <LocationFilter
                onChange={handleLocation}
                selected={requestData?.locationId}
                isAllAvailable={false}
              />

              <Box className={classes.errorBlock}></Box>

              <TextField
                label="Description"
                defaultValue={requestData?.description}
                multiline
                rows={2}
                {...register('description')}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>

              <TextField
                label="Address"
                defaultValue={requestData?.address}
                {...register('address', scheme.address)}
              />
            </Box>
            <Box className={classes.errorBlock}>
              <Typography className={classes.error}>
                {errors.address?.message}
              </Typography>
            </Box>
            <Box className={classes.periodBlock}>
              <TextField
                label="Date From"
                type="date"
                defaultValue={startDate.toLocaleDateString('en-CA')}
                {...register('dateFrom')}
              />

              <TextField
                label="Time From"
                type="time"
                defaultValue={startDate.toLocaleTimeString('en-GB').slice(0, 5)}
                {...register('timeFrom')}
              />
            </Box>
            <Box className={classes.errorBlock}>
              <Typography className={classes.error}>
                {errors.dateFrom?.message}
              </Typography>
            </Box>

            <Box className={classes.periodBlock}>
              <TextField
                label="Date To"
                type="date"
                defaultValue={endDate.toLocaleDateString('en-CA')}
                {...register('dateTo', {
                  validate: validateDate,
                })}
              />

              <TextField
                label="Time To"
                type="time"
                defaultValue={endDate.toLocaleTimeString('en-GB').slice(0, 5)}
                {...register('timeTo', {
                  validate: validateDate,
                })}
              />
            </Box>

            <Box className={classes.errorBlock}>
              <Typography className={classes.error}>
                {errors.dateTo?.message || errors.timeTo?.message}
              </Typography>
            </Box>

            <FileUploader
              value={uploadBtmName}
              onChange={handleUpload}
              picture={requestData?.picture}
            />
            <Typography className={classes.error}>{errorMessage}</Typography>
            <Typography className={classes.success}>
              {successMessage}
            </Typography>
          </DialogContent>
          <DialogActions className={classes.requestBtn}>
            <Button
              disabled={disable}
              fullWidth
              type="submit"
              variant="contained"
              className={classes.requestBtn}
            >
              {submitBtnName}
            </Button>
          </DialogActions>
        </Box>
      </form>
    </Dialog>
  )
}

export default memo(RequestForm)
