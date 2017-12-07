import axios from 'axios';
import { removeUser } from '../removeUser';

export const deleteUser = id => dispatch => {
  console.log(id)
  axios.delete(`/api/deleteuser/${id}`)
  .then((response) => {
    console.log(response.data)
    dispatch(removeUser(id));
  }).catch((err) => {
    console.log(err)
  })
};

export default deleteUser;
