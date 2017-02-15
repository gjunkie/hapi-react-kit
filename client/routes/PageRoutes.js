import App from '../components/App'
import Home from '../components/Home'

//import { requireAuth } from './RoutingUtils'

const PageRoutes = {                                       
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'home',
      component: Home
    }
  ]
}

export default PageRoutes
