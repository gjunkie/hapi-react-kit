import React, { Component } from 'react';
import { array, func } from 'prop-types';

import {
  getNewUser,
  renderUsers,
} from './helpers';

import 'isomorphic-fetch';
import './styles.css';

class ExampleContainer extends Component {
  constructor(props) {
    super(props);
  };

  createUser = () => {
    this.props.onCreateUser(getNewUser());
  };

  getAllUsers = () => {
    this.props.onGetUsers();
  };

  getUser = (id) => {
    const firstUser = this.props.users[0];
    if (firstUser) {
      // you can pass an id here to get a specific user
      this.props.onGetUser(firstUser.id);
    }
  };

  render() {
    return (
      <div className="exampleContainer">
        <h2>Example Container</h2>
        <p>Click below to create a new user. As you create users they will be saved to the MongoDB database and shown below.</p>
        <div>
          <button onClick={this.createUser}>Create User</button>
          <button onClick={this.getUser}>Get User</button>
          <button onClick={this.getAllUsers}>Get All Users</button>
        </div>

        <ul>
          { renderUsers(this.props.users, this.props.onDeleteUser) }
        </ul>
      </div>
    )
  };
};

ExampleContainer.defaultProps = {
  users: [],
};

ExampleContainer.propTypes = {
  users: array,
};

export default ExampleContainer;
