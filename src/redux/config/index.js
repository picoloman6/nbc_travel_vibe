import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../modules/UserReducer';
import postReducer from '../modules/PostReducer';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
