import React, { Component } from 'react'                    

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div>
          <strong>ID</strong>: {this.props.id}
        </div>
        <div>
          <strong>Name</strong>: {this.props.name}
        </div>
        <div>
          <strong>Title</strong>: {this.props.title}
        </div>
        <button onClick={() => this.props.deleteUser(this.props.id)}>
          Delete User
        </button>
      </li>
    )
  }
}
