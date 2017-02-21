import React, { Component, PropTypes } from 'react'
import 'isomorphic-fetch';

export default class App extends Component {

  componentDidMount() {
    // hit the first endpoint
    fetch('http://localhost:8000/api/mypath')
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      // do something with jsonResponse
      console.log(jsonResponse)
    }).catch((err) => {
      // console.log(err);
      // something went wrong: err
    });

    // hit the second endpoint
    fetch('http://localhost:8000/api/createUser', {
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
      console.log(jsonResponse)
    }).catch((err) => {
      // console.log(err);
      // something went wrong: err
    });
  }

  render() {
    return (
      <div>
        <h1>Sample Page Title</h1>
        <a href="/home">Home</a>
        {this.props.children}
      </div>
    )
  }
}
