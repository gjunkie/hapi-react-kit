import { sampleGet } from '../../api'
import { loadUser } from '../loadUser'

const fetchUser = options => sampleGet(options)

export const getUser = options => dispatch => (
  fetchUser(options).then(user => dispatch(loadUser(user)))
)

export default getUser
