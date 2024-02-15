// src/redux/reducers/authReducer.js
const initialState = {
  user: null,
  error: null,
  spinner: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: null, spinner: false };
    case 'LOGIN_FAILURE':
      return { ...state, user: null, error: action.payload, spinner: false };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
