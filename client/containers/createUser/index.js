import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import faker from 'faker';
import { saveUser } from '../../actions';
import User from '../../components/User';
import 'isomorphic-fetch';
import './styles.css';

const { any, func } = PropTypes;

const getNewUser = () => ({
  id: faker.random.number(),
  name: faker.name.findName(),
  title: faker.name.jobTitle(),
});

const allUsers = users => (
  users.map((user) => {
    return <User key={user.id} name={user.name} title={user.title} id={user.id} />;
  })
);

class PostExample extends Component {
  render() {
    return (
      <div className="postExample">
        <h2>POST Example</h2>
        <p>Click on the Add User button to generate a random user, send them to the server, and add the response to the React store.</p>
        <button onClick={() => this.props.saveUser(getNewUser())}>
          Add User
        </button>

        <h4>Users Added:</h4>
        { allUsers(this.props.users) }
      </div>
    );
  };
};

PostExample.propTypes = {
  users: any,
  saveUser: func,
};

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = {
  // maybe consolidate actions into some sort
  // of api export to not get confused with
  // the naming here.
  // saveUser,
  saveUser: saveUser
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostExample);
export default PostContainer;
