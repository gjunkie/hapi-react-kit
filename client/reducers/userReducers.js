export default (state = {}, action) => {
  switch (action.type){
    case 'ADD_USER':
      return {
        ...state,
        user: Object.assign({}, action.user)
    }
    default:
      return state;
  }
};
