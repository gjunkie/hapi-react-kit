import { samplePost } from '../../api'
import { loadUser } from '../loadUser'

const postUser = options => samplePost(options)

export const saveUser = options => dispatch => (
  postUser(options).then(user => dispatch(loadUser(user)))
)

export default saveUser
