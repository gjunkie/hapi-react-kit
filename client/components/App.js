import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  componentDidMount() {
    console.log("mount")
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
