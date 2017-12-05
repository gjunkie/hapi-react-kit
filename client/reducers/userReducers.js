export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }
    case 'DELETE_USER':
      console.log(action.user)
      const users = Object.assign([], state.users);
      const indexOfUserToDelete = state.findIndex(user => {
        return user.id == action.user.id
      })

      users.splice(indexOfUserToDelete, 1);
      return {
        ...state,
        users: (state.users || []).concat(users)
      }

    case 'LOAD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }

    case 'LOAD_USERS':
      return {
        ...state,
        users: (state.users || []).concat(action.users)
      }

    default:
      return state;
  }
};
