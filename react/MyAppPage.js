import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
// Your component pages
import MyPlugin from './pages/MyPlugin'


const store = configureStore()

const MyAppPage = () => (
  <Provider store={store}>
    <Fragment>
      <Route exact path="/mdr" component={MyPlugin} allowSAC />
    </Fragment>
  </Provider>
)

export default MyAppPage
