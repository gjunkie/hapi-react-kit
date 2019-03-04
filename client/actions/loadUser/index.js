const loadUser = (user) => {
  return {
    type: 'LOAD_USER',
    user: user
  }
}

export default loadUser;
