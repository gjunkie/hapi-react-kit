//import App from 'components/App'                            
//import Pieces from 'components/Piece/Pieces'                

//import { requireAuth } from './RoutingUtils'
// import Upload from 'components/Piece/Upload'             


const PageRoutes = {                                       
  path: '/',                                                
  //component: App,                                           
  //indexRoute: {                                             
    //component: Pieces,                                      
    //onEnter: requireAuth('/login')                          
  //},
  childRoutes: [                                            
    // {
    //   path: 'upload',                                    
    //   component: Upload,                                 
    //   onEnter: requireAuth('/login')                     
    // },
    {
      //path: 'pieces',                                       
      //component: Pieces,                                    
      //onEnter: requireAuth('/login')                        
    }
  ]
}

export default PageRoutes
