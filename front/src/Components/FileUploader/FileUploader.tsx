import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react'
import Box from '@mui/material/Box'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

interface FileUploaderProps {
  value: string
  id?: string
  name?: string
  picture?: string
  onChange: (e) => void
}
const url = '/api/images/'

const fileSize = 5242880

const getUrl = (image: string) => {
  return image ? url + image : ''
}

export const FileUploader = (props: FileUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState(getUrl(props.picture))
  const [showUploadBtn, setShowUploadBtn] = useState(!props.picture)
  const [message, setMessage] = useState('')

  const handleRemove = (
    e: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    >
  ) => {
    setSelectedImage('')
    setShowUploadBtn(true)
    props.onChange(e)
  }

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target.files && !!e?.target.files.length) {
      if (e?.target.files[0].size < fileSize) {
        setSelectedImage(URL.createObjectURL(e.target.files[0]))
        props.onChange(e)
        setShowUploadBtn(false)
        setMessage('')
      } else {
        setMessage('Image is more than 5Mb. Please choose another file')
      }
    }
  }

  const classes = useStyles()
  return (
    <Box>
      <label htmlFor={props.id}>
        <input
          accept="image/*"
          id={props.id}
          name={props.name}
          type="file"
          onChange={imageChange}
          className={classes.input}
          onClick={handleRemove}
        />
        <Box>
          {selectedImage && (
            <Box className={classes.preview}>
              <img src={selectedImage} className={classes.image} alt="Item" />

              <Box className={classes.removeLayer}>
                <Typography className={classes.removeText}>Remove</Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box className={showUploadBtn ? classes.uploadBtn : classes.hideBtn}>
          <Box>{props.value}</Box>
        </Box>
        <Typography className={classes.error}>{message}</Typography>
      </label>
    </Box>
  )
}

export default React.memo(FileUploader)
