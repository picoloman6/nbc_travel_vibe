import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../modules/UserReducer';
import postReducer from '../modules/PostReducer';
import commentReducer from '../modules/CommentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
