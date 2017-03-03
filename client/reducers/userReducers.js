export default (state = {}, action) => {
  switch (action.type){
    case 'LOAD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }

    case 'ADD_USER':
      return {
        ...state,
        users: (state.users || []).concat(action.user)
      }

    default:
      return state;
  }
};
