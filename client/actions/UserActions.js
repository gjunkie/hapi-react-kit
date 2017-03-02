export const getUser = (user) => {
  return {
    type: 'GET_USER',
    user: user
  }
}

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user: user
  }
}
