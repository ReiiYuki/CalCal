import React from 'react'
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router'
import {
  Admin,
  CalCal,
  App
} from './components'

export default ()=>{
  return (
    <Router history={browserHistory}>
      <Route path='/'
        component={App}>
        <IndexRoute component={CalCal}/>
        <Route path="/admin">
          <IndexRoute component={Admin}/>
        </Route>
      </Route>
    </Router>
  )
}
