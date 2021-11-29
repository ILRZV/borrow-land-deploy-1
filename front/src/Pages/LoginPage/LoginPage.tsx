import { Button, Container, Typography, InputBase } from '@material-ui/core'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import useStyles from './styles'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTES } from '../../utils/paths'
import { FIELD_NAMES } from '../../utils/fieldNames'

import { loginFormValidationScheme as scheme } from './utils'
import {
  getLoggedIn,
  getLoginErrorMessage,
} from '../../store/selectors/userSelector'
import { loginThunk } from '../../store/reducers/userReducer'

const login = 'Log in'
const enterLogin = 'Please enter your login and password'
const loginGoogle = 'Log in your Google Account'
const forgotPassMeesage = 'Forgot the password?'
const createAccMessage = 'Let`s create an account!'
const signInMessage = 'Sign in with Google'
const clickHereMessage = 'Click here!'

const LoginPage: FC = () => {
  const classes = useStyles()

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' })
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(getLoggedIn)
  const message = useSelector(getLoginErrorMessage)

  const onSubmit = () => {
    dispatch(
      loginThunk(getValues(FIELD_NAMES.email), getValues(FIELD_NAMES.password))
    )
  }

  if (isLoggedIn) {
    return <Redirect to={ROUTES.mainPage} />
  }

  return (
    <Container maxWidth="sm">
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography className={classes.text} variant="h4" component="h4">
          {login}
        </Typography>

        <Typography variant="h6" component="h6">
          {enterLogin}
        </Typography>

        <InputBase
          required
          placeholder="Email"
          id="email"
          error={!!errors.email?.message}
          fullWidth
          className={classes.field}
          {...register(FIELD_NAMES.email, scheme.email)}
        />
        <Typography className={classes.error}>
          {errors.email?.message}
        </Typography>

        <InputBase
          required
          type="password"
          placeholder="Password"
          error={!!errors.password?.message}
          id="password"
          fullWidth
          className={classes.field}
          {...register(FIELD_NAMES.password, scheme.password)}
        />

        <Typography className={classes.error}>
          {errors.password && errors.password.message}
        </Typography>

        <Typography className={classes.error}>{message}</Typography>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isDirty || !isValid}
          className={classes.loginBtn}
        >
          {login}
        </Button>

        <Typography variant="h6" component="h6">
          {forgotPassMeesage}{' '}
          <Link to={ROUTES.resetPassword} className={classes.link}>
            {clickHereMessage}
          </Link>
        </Typography>

        <Typography className={classes.text} variant="h5" component="h5">
          {loginGoogle}
        </Typography>

        <Button variant="outlined" className={classes.googleBtn}>
          {signInMessage}
        </Button>

        <Typography variant="h6" component="h6">
          New user?{' '}
          <Link to={ROUTES.registration} className={classes.link}>
            {createAccMessage}
          </Link>
        </Typography>
      </form>
    </Container>
  )
}

export default LoginPage
