import React, { Component } from 'react'                    

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h5>User Component</h5>
        <div>
          <strong>Name</strong>: {this.props.name}
        </div>
        <div>
          <strong>Title</strong>: {this.props.title}
        </div>
      </div>
    )
  }
}
