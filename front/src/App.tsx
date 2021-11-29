import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PhoneVerificationPage from './Pages/PhoneVerificationPage/PhoneVerificationPage'
import ResetPassword from './Pages/ResetPassword/'
import LoginPage from './Pages/LoginPage/LoginPage'
import WelcomePage from './Pages/WelcomePage'
import CreateNewPassword from './Pages/CreateNewPasswordPage/'
import {
  MainPage,
  ToolPage,
  RequestPage,
  RegisterPage,
  RequestDetailsPage,
  AllRequestsPage,
} from './Pages'
import './styles/main.css'
import theme from './theme'

import { Provider } from 'react-redux'
import { store } from './store'
import SearchContextProvider from './Contexts/SearchContext'

export const App = () => {
  return (
    <Provider store={store}>
      <SearchContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                <WelcomePage />
              </Route>

              <Route exact path="/register">
                <RegisterPage />
              </Route>

              <Route exact path="/register/verificate">
                <PhoneVerificationPage />
              </Route>

              <Route exact path="/login">
                <LoginPage />
              </Route>

              <Route exact path="/create-new-password">
                <CreateNewPassword />
              </Route>

              <Route exact path="/reset-password">
                <ResetPassword />
              </Route>

              <Route exact path="/main">
                <MainPage />
              </Route>

              <Route exact path="/requests">
                <RequestPage />
              </Route>

              <Route exact path="/all-requests">
                <AllRequestsPage />
              </Route>

              <Route exact path="/requests/:requestId">
                <RequestDetailsPage />
              </Route>

              <Route exact path="/tools">
                <ToolPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </SearchContextProvider>
    </Provider>
  )
}
