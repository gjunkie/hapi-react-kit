const loadUsers = (users) => {
  return {
    type: 'LOAD_USERS',
    users: users
  };
};

export default loadUsers;
