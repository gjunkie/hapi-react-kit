import React, { Component } from 'react'                    
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions';

const { number, string } = PropTypes;

const User = (props) => {
  return (
    <div>
      <div>
        <strong>ID</strong>: {props.id}
      </div>
      <div>
        <strong>Name</strong>: {props.name}
      </div>
      <div>
        <strong>Title</strong>: {props.title}
      </div>
      <button onClick={() => {
        console.log('go away', props.id)
        console.log(props)
        console.log(deleteUser())
        const then = deleteUser(props.id);
        then();
      }}>
        Delete User
      </button>
    </div>
  )
}

User.propTypes = {
  id: number,
  name: string,
  title: string,
};

const user = connect()(User);
export default user;
