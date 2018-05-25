export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id), 
      }

    case 'LOAD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }

    case 'LOAD_USERS':
      return {
        ...state,
        users: action.users
      }

    default:
      return state;
  }
};
