import User from '../../components/User';

const helpers = {
  allUsers: (users, onDelete) => (
    users.map(user => (
      <li key={user.id}><User user={user} onDelete={onDelete} /></li>)
    )
  ),
};

export default helpers;
