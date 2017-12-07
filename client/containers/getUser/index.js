import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions';
import helpers from './helpers';

import 'isomorphic-fetch';
import './styles.css';

const { any, func } = PropTypes;

class GetExample extends Component {
  componentDidMount() {
    this.props.onGetUsers();
  };

  render() {
    return (
      <div className="getExample">
        <h2>GET Example</h2>
        <p>Click on the Get User button to get a random user from the server. A new User comonent will be rendered with the user's information.</p>
        <button onClick={() => this.props.onGetUser(1)}>Get User</button>

        { helpers.allUsers(this.props.users, this.props.onDeleteUser) }
      </div>
    )
  };
};

GetExample.propTypes = {
  users: any,
};

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
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

const GetContainer = connect(mapStateToProps, mapDispatchToProps)(GetExample);
export default GetContainer;

