import axios from 'axios'
import { loadUsers } from '../loadUsers';

export const getUsers = options => dispatch => (
  axios.get('/api/getusers')
  .then((response) => {
    dispatch(loadUsers(response.data));
  }).catch((err) => {
    console.log(err)
  })
);

export default getUsers;
