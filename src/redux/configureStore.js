import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './messages/messageReducer';

const store = configureStore({
  reducer: {
    home: greetingSlice.reducer,
  },
});

export default store;
