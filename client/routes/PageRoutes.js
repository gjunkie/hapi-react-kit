import App from '../containers/app/App'
import GetContainer from '../containers/get-example/Get'
import PostContainer from '../containers/post-example/Post'

//import { requireAuth } from './RoutingUtils'

const PageRoutes = {                                       
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'get-example',
      component: GetContainer
    },
    {
      path: 'post-example',
      component: PostContainer
    }
  ]
}

export default PageRoutes
