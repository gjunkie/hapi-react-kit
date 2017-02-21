import App from '../components/app/App'
import Get from '../components/get/Get'
import Post from '../components/post/Post'

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
