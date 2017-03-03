export const sampleFetch = (id) => {
  let example = fetch('http://localhost:8000/api/exampleget')
    .then((response) => {
      return response.json()
    })
    .then((jsonResponse) => {
      // do something with jsonResponse
      return jsonResponse
    }).catch((err) => {
      // something went wrong: err
      console.log(err)
    });

  return example
}

export const samplePost = (payload) => {
    let example = fetch('http://localhost:8000/api/examplepost', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonResponse) => {
      // do something with jsonResponse
      return jsonResponse
    }).catch((err) => {
      // something went wrong: err
      console.log(err)
    })

  return example
}
