// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import accountReducer from './reducers/account';

const store = configureStore({
  reducer: {
    accountStore: accountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
