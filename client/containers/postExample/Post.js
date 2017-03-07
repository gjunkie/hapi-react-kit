import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import faker from 'faker';
import { saveUser } from '../../actions';
import User from '../../components/User';
import 'isomorphic-fetch';
import './styles.css';

const { any, func } = PropTypes;

class PostExample extends Component {

  render() {
    let userToAdd = {
      id: faker.random.number(),
      name: faker.name.findName(),
      title: faker.name.jobTitle()
    };
    let addedUsers = this.props.users.map((user) => {
      return <User name={user.name} title={user.title} id={user.id} />;
    });

    return (
      <div className="postExample">
        <h2>POST Example</h2>
        <p>Click on the Add User button to generate a random user, send them to the server, and add the response to the React store.</p>
        <button onClick={() => this.props.saveUser(userToAdd)}>Add User</button>

        <h4>Users Added:</h4>
        <ReactCSSTransitionGroup
        component="ul"
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {addedUsers}
        </ReactCSSTransitionGroup>
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
