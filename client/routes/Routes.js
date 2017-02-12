import React from 'react'
//import { getSession } from '../actions/UserActions'
import { render } from 'react-dom'
import { Router } from 'react-router'

import PageRoutes from './PageRoutes'

const routeConfig = [
  PageRoutes
]

export const AppRouter = <Router
  routes={routeConfig} />

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

export default new Routes()
