// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  // Add other reducers if needed
});

export default rootReducer;
