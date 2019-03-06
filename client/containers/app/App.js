import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ExampleContainer from '../exampleContainer';
import './app.css';

const BaseApp = () => {
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
      <Route path="/example" exact component={ExampleContainer} />
    </div>
  );
};

export default BaseApp;
