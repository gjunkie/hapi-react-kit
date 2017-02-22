import React, { Component, PropTypes } from 'react'
import './app.css';

const Link = require('react-router').Link

export default class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Hapi-React-Kit</h1>
          <ul>
            <li><Link to={`/get-example/`}>GET Example</Link></li>
            <li><Link to={`/post-example/`}>POST Example</Link></li>
          </ul>
        </header>
        {this.props.children}
        <footer>
          Built by @gjunkie
        </footer>
      </div>
    )
  }
}
