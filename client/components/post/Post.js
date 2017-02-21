import React, { Component } from 'react'                    
import 'isomorphic-fetch';

export default class Get extends Component {

  constructor(props) {                                      
    super(props)                                            

    this.state = {}                                         
    this.state.data = {}                                         
  } 

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

      this.state.data = jsonResponse;
    }).catch((err) => {
      // console.log(err);
      // something went wrong: err
    });
  }

  render() {
    return (
      <div>
        <h1>Get Example</h1>
        <h3>{this.state.data.firstName}: {this.state.data.lastname}</h3>
        <h4>From file: {this.state.data.title}</h4>
      </div>
    )
  }
}
