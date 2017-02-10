import React from 'react'
import { getSession } from '../actions/UserActions'
import { render } from 'react-dom'
import { Router } from 'react-router'

//import UserRoutes from './UserRoutes'                       

const routeConfig = [
  UserRoutes
]

export const AppRouter = <Router
  routes={routeConfig}
  onUpdate={handleUpdate} />

class Routes {
  constructor() {
    // Try to login the user before loading anything else. This is useful
    // for the case where someone already logged in and refreshes the page or
    // opens another tab.                                   
    getSession()
  } 

  run(content) {
    return getSession()
      .then(() => {
        return render(AppRouter, content)
      })
  }
}

export default new Routes()
