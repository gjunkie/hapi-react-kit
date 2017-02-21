import React, { Component } from 'react'                    
import 'isomorphic-fetch';

export default class Get extends Component {

  constructor(props) {                                      
    super(props)                                            

    this.state = {}                                         
    this.state.data = {}                                         
  } 

  componentDidMount() {
    fetch('http://localhost:8000/api/exampleget')
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      // do something with jsonResponse
      console.log('The GET response from the server:')
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
        <h3>{this.state.data.name}: {this.state.data.title}</h3>
        <h4>From file: {this.state.data.from}</h4>
      </div>
    )
  }
}
