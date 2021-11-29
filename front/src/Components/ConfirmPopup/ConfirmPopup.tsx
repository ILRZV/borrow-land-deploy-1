import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { useToggle } from 'react-use'

const DIALOG_TITLE = 'Are you sure you want to delete the answer?'
const YES_BTN = 'Yes'
const NO_BTN = 'No'

const ConfirmPopup = () => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <div>
      <IconButton onClick={toggleIsOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={isOpen} onClose={toggleIsOpen}>
        <DialogTitle>{DIALOG_TITLE}</DialogTitle>
        <DialogActions>
          <Button endIcon={<CheckIcon />}>{YES_BTN}</Button>
          <Button onClick={toggleIsOpen} endIcon={<CloseIcon />} autoFocus>
            {NO_BTN}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default React.memo(ConfirmPopup)
