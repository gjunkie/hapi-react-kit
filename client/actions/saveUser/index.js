import axios from 'axios'
import loadUser from '../loadUser';

export const saveUser = payload => dispatch => {
  axios.post('/api/createuser', {
    id: payload.id,
    name: payload.name,
    title: payload.title
  })
  .then((response) => {
    dispatch(loadUser(response.data));
  }).catch((err) => {
    console.log(err)
  })
};

export default saveUser;
