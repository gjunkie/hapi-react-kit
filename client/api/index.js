import axios from 'axios'

export const sampleFetch = (id) => {
  let example = axios.get('http://localhost:8000/api/exampleget', {
    params: {
      id: id
    }
  })
  .then((response) => {
    return response.data
  }).catch((err) => {
    // something went wrong: err
    console.log(err)
  })

  return example
}

export const samplePost = (payload) => {
  let example = axios.post('http://localhost:8000/api/examplepost', {
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
