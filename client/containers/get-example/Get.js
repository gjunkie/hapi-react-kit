import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions'
import 'isomorphic-fetch';
import User from '../../components/User/User';

const { any, func } = PropTypes;

class GetExample extends Component {
  //constructor() {
    //super();
    //this.state = { user: {} }
  //}

  //componentDidMount() {
    //fetch('http://localhost:8000/api/exampleget')
    //.then((response) => {
      //return response.json();
    //})
    //.then((jsonResponse) => {
      //// do something with jsonResponse
      //this.setState({ user: jsonResponse });
    //}).catch((err) => {
      //// console.log(err);
      //// something went wrong: err
    //});
  //}

  render() {
    return (
      <div>
        <h2>GET Example</h2>
        <p>On this page we are making a GET request and setting the json response as the state. Then we pass the user data down to the User component.</p>
        <button onClick={() => this.props.getUser({name: 'Freddie Carthy'})}>Get User</button>
      </div>
    )
  }
}

GetExample.propTypes = {
  user: any,
  getUser: func,
};

const mapStateToProps = state => ({
  user: state.user || {},
});

const mapDispatchToProps = {
  // maybe consolidate actions into some sort
  // of api export to not get confused with
  // the naming here.
  // addUser,
  getUser: getUser,
};

const GetContainer = connect(mapStateToProps, mapDispatchToProps)(GetExample);
export default GetContainer

