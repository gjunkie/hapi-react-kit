import React, { Component } from 'react'
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
          <h3>You're up and running!</h3>
        </header>
        <div>The goal behind this boilerplate project was to ensure that the api and the client were kept separate. This is so that you can easily use a different node framework or remove React if you wish to do so.</div>
        {this.props.children}
      </div>
    )
  }
}
