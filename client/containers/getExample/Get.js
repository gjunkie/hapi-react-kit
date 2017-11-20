import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import 'isomorphic-fetch';
import './styles.css';
import User from '../../components/User';

const { any, func } = PropTypes;

class GetExample extends Component {
  render() {
    let allUsers = this.props.users.map((user) => {
      return <User name={user.name} title={user.title} id={user.id} key={user.id} />;
    })

    return (
      <div className="getExample">
        <h2>GET Example</h2>
        <p>Click on the Get User button to get a random user from the server. A new User comonent will be rendered with the user's information.</p>
        <button onClick={() => this.props.getUser(1)}>Get User</button>

        <ReactCSSTransitionGroup
        component="ul"
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {allUsers}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

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
};

const GetContainer = connect(mapStateToProps, mapDispatchToProps)(GetExample);
export default GetContainer

