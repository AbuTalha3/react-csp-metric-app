/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { stockSlice } from './redux/homeSlice';

export default configureStore({
  reducer: {
    stocks: stockSlice.reducer,
  },
});
