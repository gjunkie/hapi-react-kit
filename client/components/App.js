import React, { Component, PropTypes } from 'react'
import 'isomorphic-fetch';

export default class App extends Component {

  componentDidMount() {
    fetch('/api/path').then(res =>
      console.log(res)
    );
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
