import React from 'react'
//import { getSession } from '../actions/UserActions'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import App from '../containers/app/App';

import PageRoutes from './PageRoutes'

export const AppRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

class Routes {
  constructor() {
    // Try to login the user before loading anything else. This is useful
    // for the case where someone already logged in and refreshes the page or
    // opens another tab.                                   
    //getSession()
  }

  run(content) {
    return AppRouter;
    //return getSession()
      //.then(() => {
        //return render(AppRouter, content)
      //})
  }
}

export default AppRouter
