import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions'
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
    return (
      <div>
        <h2>POST Example</h2>
        <p>Check your console for the GET response</p>
        <button onClick={() => this.props.addUser({name: 'Freddie Carthy'})}>Add User</button>
      </div>
    )
  }
}

PostExample.propTypes = {
  user: any,
  addUser: func,
};

const mapStateToProps = state => ({
  user: state.user || {},
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
