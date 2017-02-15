import React from 'react'
//import { getSession } from '../actions/UserActions'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import PageRoutes from './PageRoutes'

export const AppRouter = () => (<Router
  history={browserHistory}
  routes={PageRoutes} />)

class Routes {
  constructor() {
    // Try to login the user before loading anything else. This is useful
    // for the case where someone already logged in and refreshes the page or
    // opens another tab.                                   
    //getSession()
  }

  run(content) {
    return render(AppRouter, content)
    //return getSession()
      //.then(() => {
        //console.log('tset')
        //return render(AppRouter, content)
      //})
  }
}

export default AppRouter
