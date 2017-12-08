import React, { Component, PropTypes } from 'react'
import './app.css';

const Link = require('react-router').Link

export default class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Hapi-React-Kit</h1>
          <ul className="nav">
            <li><Link to={`/example/`}>Example Route</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    )
  }
}
