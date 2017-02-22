import App from '../containers/app/App'
import Get from '../containers/get-example/Get'
import Post from '../containers/post-example/Post'

//import { requireAuth } from './RoutingUtils'

const PageRoutes = {                                       
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'get-example',
      component: Get
    },
    {
      path: 'post-example',
      component: Post
    }
  ]
}

export default PageRoutes
