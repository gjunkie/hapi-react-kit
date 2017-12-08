import axios from 'axios';
import { removeUser } from '../removeUser';

export const deleteUser = id => dispatch => {
  axios.delete(`/api/deleteuser/${id}`)
  .then((response) => {
    dispatch(removeUser(id));
  }).catch((err) => {
    console.log(err)
  })
};

export default deleteUser;
