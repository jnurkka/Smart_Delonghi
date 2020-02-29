import { LOGIN_USER } from "../actions/user";


const initialState = {
  userId: 0,
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, userId: action.userId, username: action.username };
    default:
      return state;
  }
}