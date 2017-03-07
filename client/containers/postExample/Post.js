import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';
import { saveUser } from '../../actions';
import User from '../../components/User';
import 'isomorphic-fetch';

const { any, func } = PropTypes;

class PostExample extends Component {

  render() {
    let userToAdd = {
      id: faker.random.number(),
      name: faker.name.findName(),
      title: faker.name.jobTitle()
    };
    let addedUser = this.props.users.map((user) => {
      return <User name={user.name} title={user.title} id={user.id} />;
    });

    return (
      <div>
        <h2>POST Example</h2>
        <p>Check your console for the GET response</p>
        <button onClick={() => this.props.saveUser(userToAdd)}>Add User</button>

        <h4>You added user:</h4>
        {addedUser}
      </div>
    )
  }
}

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
