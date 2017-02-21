import React, { Component, PropTypes } from 'react'
import './app.css';

const Link = require('react-router').Link

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <h1>Hapi-React-Kit</h1>
          <ul>
            <li><Link to={`/get-example/`}>Get Example</Link></li>
            <li><Link to={`/post-example/`}>Post Example</Link></li>
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
