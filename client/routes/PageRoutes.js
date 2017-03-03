import App from '../containers/app/App'
import GetContainer from '../containers/getExample/Get'
import PostContainer from '../containers/postExample/Post'

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
