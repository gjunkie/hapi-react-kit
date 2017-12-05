import axios from 'axios';
import { loadUsers } from '../loadUsers';

export const deleteUser = id => dispatch => {
  console.log(id)
  axios.delete(`/api/deleteuser/${id}`)
  .then((response) => {
    console.log(response.data)
    dispatch(loadUsers(response.data));
  }).catch((err) => {
    console.log(err)
  })
};

export default deleteUser;
