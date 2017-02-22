import React, { Component } from 'react';
import 'isomorphic-fetch';

import User from '../../components/User/User';

export default class GetExample extends Component {
  constructor() {
    super();
    this.state = { user: {} }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/exampleget')
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      // do something with jsonResponse
      this.setState({ user: jsonResponse });
    }).catch((err) => {
      // console.log(err);
      // something went wrong: err
    });
  }

  render() {
    return (
      <div>
        <h2>GET Example</h2>
        <p>On this page we are making a GET request and setting the json response as the state. Then we pass the user data down to the User component.</p>

        <User user={this.state.user} />
      </div>
    )
  }
}

