import React, { Component } from 'react'                    
import 'isomorphic-fetch';

export default class Get extends Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/examplepost', {
      method: 'POST',
      body: JSON.stringify({
        firstName: 'Jeremiah',
        lastName: 'Johnson',
        title: 'Badass'
      })
    })
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      // do something with jsonResponse
      console.log('The POST response from the server:')
      console.log(jsonResponse)
    }).catch((err) => {
      // console.log(err);
      // something went wrong: err
    });
  }

  render() {
    return (
      <div>
        <h2>POST Example</h2>
        <p>Check your console for the GET response</p>
      </div>
    )
  }
}
