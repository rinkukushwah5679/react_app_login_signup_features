// src/redux/reducers/authReducer.js
const initialState = {
  posts: [],
  post_details: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_LIST':
      return { ...state, posts: action.payload }
    case 'POST_SHOW':
      return { ...state, post_details: action.payload }
    default:
      return state;
  }
};

export default postReducer;
