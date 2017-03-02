export default (state = [], action) => {
  switch (action.type){
    case 'ADD_USER':
      return [
        ...state,
        Object.assign({}, action.user)
      ]
    default:
      return state;
  }
};
