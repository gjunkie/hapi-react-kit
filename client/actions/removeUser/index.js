const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    id: id
  }
}

export default removeUser;
