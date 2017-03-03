import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUser'
import User from '../../components/User'
import 'isomorphic-fetch';

const { any, func } = PropTypes;

class PostExample extends Component {

  //componentDidMount() {
    //fetch('http://localhost:8000/api/examplepost', {
      //method: 'POST',
      //body: JSON.stringify({
        //firstName: 'Jeremiah',
        //lastName: 'Johnson',
        //title: 'Badass'
      //})
    //})
    //.then((response) => {
      //return response.json();
    //})
    //.then((jsonResponse) => {
      //// do something with jsonResponse
      //console.log('The POST response from the server:')
      //console.log(jsonResponse)
    //}).catch((err) => {
      //// console.log(err);
      //// something went wrong: err
    //});
  //}

  render() {
    let allUsers = this.props.users.map((user) => {
       return <User name={user.name} title={user.title} />;
    })

    return (
      <div>
        <h2>POST Example</h2>
        <p>Check your console for the GET response</p>
        <button onClick={() => this.props.addUser({id: 1, name: 'Freddie Carthy', title: 'boss'})}>Add User</button>
        <button onClick={() => this.props.addUser({id: 2, name: 'Dude McGee', title: 'boss'})}>Add User</button>
        <button onClick={() => this.props.addUser({id: 3, name: 'Surley Sue', title: 'boss'})}>Add User</button>
        {allUsers}
      </div>
    )
  }
}

PostExample.propTypes = {
  users: any,
  addUser: func,
};

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = {
  // maybe consolidate actions into some sort
  // of api export to not get confused with
  // the naming here.
  // addUser,
  addUser: addUser
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostExample);
export default PostContainer;
