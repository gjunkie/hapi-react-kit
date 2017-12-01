import axios from 'axios'

export const sampleGet = (id) => {
  let example = axios.get('/api/getuser', {
    params: {
      id: id
    }
  })
  .then((response) => {
    return response.data
  }).catch((err) => {
    console.log(err)
  })

  return example
}

export const samplePost = (payload) => {
  let example = axios.post('/api/createuser', {
    id: payload.id,
    name: payload.name,
    title: payload.title
  })
  .then((response) => {
    return response.data
  }).catch((err) => {
    console.log(err)
  })

  return example
}
