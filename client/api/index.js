import axios from 'axios'

export const sampleFetch = (id) => {
  let example = axios.get('/api/exampleget', {
    params: {
      id: id
    }
  })
  .then((response) => {
    console.log(response.data)
    return response.data
  }).catch((err) => {
    // something went wrong: err
    console.log(err)
  })

  return example
}

export const samplePost = (payload) => {
  let example = axios.post('/api/examplepost', {
    id: payload.id,
    name: payload.name,
    title: payload.title
  })
  .then((response) => {
    return response.data
  }).catch((err) => {
    // something went wrong: err
    console.log(err)
  })

  return example
}
