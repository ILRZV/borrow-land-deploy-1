import React, { useState, memo } from 'react'
import Box from '@mui/material/Box'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import Dialog from '@mui/material/Dialog'
import { Typography, Button } from '@material-ui/core'
import useStyles from './styles'
import { CreateReplies } from '../../services/types'
import { RepliesFormValidationScheme as scheme } from './utils'
import { useDispatch } from 'react-redux'
import { addNewReplyThunk } from '../../store/reducers/replyReducer'

const submitBtnName = 'Send'
const formName = 'Type your reply text:'
const defaulFieldValue = '-'

interface RepliesFormProps {
  onClose: () => void
  open: boolean
  requestId?: string | number
}

export const RepliesForm = ({ onClose, open, requestId }: RepliesFormProps) => {
  const classes = useStyles()
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<CreateReplies>({ mode: 'onChange' })

  const onSubmit = async () => {
    const reply: CreateReplies = {
      text: getValues('text'),
      telegram: getValues('telegram'),
      viber: getValues('viber'),
      whatsapp: getValues('whatsapp'),
      facebook: getValues('facebook'),
      vkontakte: getValues('vkontakte'),
    }
    if (requestId) {
      dispatch(addNewReplyThunk(requestId, reply))
      setErrorMessage('')
      setSuccessMessage('Congrats! Reply was successfully handled')
      handleClose()
      reset()
    } else {
      setErrorMessage('Oops, something went wrong while handling :(')
      setSuccessMessage('')
    }
  }

  const handleClose = () => {
    reset()
    return onClose()
  }

  const disable = !isDirty || !isValid

  return (
    <Dialog open={open} onClose={handleClose}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
      >
        <Box className={classes.root}>
          <DialogTitle>{formName}</DialogTitle>
          <DialogContent>
            <Box className={classes.input}>
              <Box className={classes.errorBlock}></Box>

              <TextField
                label="text"
                multiline
                rows={7}
                {...register('text', scheme.description)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>

              <TextField
                label="Telegram"
                rows={1}
                defaultValue={defaulFieldValue}
                {...register('telegram', scheme.link)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>

              <TextField
                label="Viber"
                rows={1}
                defaultValue={defaulFieldValue}
                {...register('viber', scheme.link)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>

              <TextField
                label="WhatsApp"
                rows={1}
                defaultValue={defaulFieldValue}
                {...register('whatsapp', scheme.link)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>

              <TextField
                label="Facebook"
                rows={1}
                defaultValue={defaulFieldValue}
                {...register('facebook', scheme.link)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>

              <TextField
                label="VKontakte"
                rows={1}
                defaultValue={defaulFieldValue}
                {...register('vkontakte', scheme.link)}
              />

              <Box className={classes.errorBlock}>
                <Typography className={classes.error}></Typography>
              </Box>
            </Box>

            <Typography className={classes.error}>{errorMessage}</Typography>
            <Typography className={classes.success}>
              {successMessage}
            </Typography>
          </DialogContent>
          <DialogActions className={classes.replyBtn}>
            <Button
              disabled={disable}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className={classes.replyBtn}
            >
              {submitBtnName}
            </Button>
          </DialogActions>
        </Box>
      </form>
    </Dialog>
  )
}

export default memo(RepliesForm)
