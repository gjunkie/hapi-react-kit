import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions';
import helpers from './helpers';

import 'isomorphic-fetch';
import './styles.css';

const { any, func } = PropTypes;

class Example extends Component {
  componentDidMount() {
    this.props.onGetUsers();
  };

  render() {
    return (
      <div className="exampleContainer">
        <h2>Example Container</h2>
        <p>Click on the Get User button to get a random user from the server. A new User comonent will be rendered with the user's information.</p>
        <div>
          <button onClick={() => this.props.onGetUser(1)}>Get User</button>
          <button onClick={() => this.props.onCreateUser(helpers.getNewUser())}>Create User</button>
        </div>

        <ul>
          { helpers.allUsers(this.props.users, this.props.onDeleteUser) }
        </ul>
      </div>
    )
  };
};

Example.propTypes = {
  users: any,
};

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateUser: (userData) => {
    dispatch(actions.saveUser(userData));
  },
  onDeleteUser: (id) => {
    dispatch(actions.deleteUser(id));
  },
  onGetUser: (id) => {
    dispatch(actions.getUser(id));
  },
  onGetUsers: () => {
    dispatch(actions.getUsers());
  },
});

const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(Example);
export default ExampleContainer;

