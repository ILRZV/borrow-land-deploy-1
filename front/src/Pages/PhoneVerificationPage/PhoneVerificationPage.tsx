import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, InputBase } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import useStyles from './styles'

type Inputs = {
  phone: string
}

const PhoneVerificationPage = () => {
  const classes = useStyles()
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <Container>
      <form noValidate autoComplete="off">
        <div className={classes.root}>
          <div className={classes.registerBlock}>
            <div>
              <h1 className={classes.title}>Please enter your phone number</h1>
            </div>

            <InputBase
              required
              placeholder="Phone"
              id="phone"
              fullWidth
              className={classes.field}
              {...register('phone')}
            />
            <p>{errors.phone?.message}</p>

            <Link to="/register" className={classes.link}>
              <Button
                variant="contained"
                size="large"
                className={classes.btn}
                color="primary"
              >
                Submit
              </Button>
            </Link>

            <Link to="/register" className={classes.link}>
              <Button variant="outlined" className={classes.backBtn}>
                Back
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default PhoneVerificationPage
