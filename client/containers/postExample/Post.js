import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { postUser } from '../../actions'
import User from '../../components/User'
import 'isomorphic-fetch';

const { any, func } = PropTypes;

class PostExample extends Component {

  render() {
    let userToAdd = {
      id: 1,
      name: 'Pickle Bottom',
      title: 'Photographer'
    }
    let addedUser = this.props.users.map((user) => {
      if(user.id === userToAdd.id) {
        return <User name={user.name} title={user.title} />;
      }
    })

    return (
      <div>
        <h2>POST Example</h2>
        <p>Check your console for the GET response</p>
        <button onClick={() => this.props.postUser(userToAdd)}>Add User</button>

        <h4>You added user:</h4>
        {addedUser}
      </div>
    )
  }
}

PostExample.propTypes = {
  users: any,
  postUser: func,
};

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = {
  // maybe consolidate actions into some sort
  // of api export to not get confused with
  // the naming here.
  // postUser,
  postUser: postUser
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostExample);
export default PostContainer;
