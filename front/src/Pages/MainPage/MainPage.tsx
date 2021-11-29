import React from 'react'
import { Container } from '@material-ui/core'

import YandexMap from '../../Components/YandexMap'
import Layout from '../../Components/Layout'
import useStyles from './styles'

const MainPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.root}>
        <YandexMap />
      </Container>
    </Layout>
  )
}
export default React.memo(MainPage)
