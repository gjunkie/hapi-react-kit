import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import { getUsers } from '../../actions';
import 'isomorphic-fetch';
import './styles.css';
import User from '../../components/User';

const { any, func } = PropTypes;

const allUsers = users => (
  users.map(user => <li key={user.id}><User name={user.name} title={user.title} id={user.id} /></li>)
);

class GetExample extends Component {
  componentDidMount() {
    this.props.getUsers();
  };

  render() {
    return (
      <div className="getExample">
        <h2>GET Example</h2>
        <p>Click on the Get User button to get a random user from the server. A new User comonent will be rendered with the user's information.</p>
        <button onClick={() => this.props.getUser(1)}>Get User</button>

        { allUsers(this.props.users) }
      </div>
    )
  };
};

GetExample.propTypes = {
  users: any,
  getUser: func,
};

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = {
  // maybe consolidate actions into some sort
  // of api export to not get confused with
  // the naming here.
  // getUser,
  getUser: getUser,
  getUsers: getUsers,
};

const GetContainer = connect(mapStateToProps, mapDispatchToProps)(GetExample);
export default GetContainer;

