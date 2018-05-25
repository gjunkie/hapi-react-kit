import { connect } from 'react-redux';
import actions from '../../actions';
import ExampleContainer from './exampleContainer';

const mapStateToProps = state => ({
  users: state.users || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateUser: (userData) => {
    dispatch(actions.saveUser(userData));
  },
  onDeleteUser: (id) => {
    dispatch(actions.deleteUser(id));
  },
  onGetUser: (id) => {
    dispatch(actions.getUser(id));
  },
  onGetUsers: () => {
    dispatch(actions.getUsers());
  },
});

const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
export default ConnectedContainer;

