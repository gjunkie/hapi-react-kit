export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }
    case 'REMOVE_USER':
      const users = Object.assign([], state.users);
      const userIndex = users.findIndex(user => {
        return user.id == action.user.id
      })

      users.splice(userIndex, 1);
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
