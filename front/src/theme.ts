import { createTheme } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fe4c00',
      light: '#fe4c00',
      dark: '#fe4c00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f5f5f5',
    },
    error: {
      main: '#FF0000',
    },
  },
})

export default theme
