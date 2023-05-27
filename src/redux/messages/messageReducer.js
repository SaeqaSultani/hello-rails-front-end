import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// action types
const GREETINGLIST = 'greet/GREETINGLIST';

const FetchGreeting = createAsyncThunk(GREETINGLIST, async () => {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:3000/api/v1/greetings',
  };
  const response = await axios.request(options);

  const greeting = response.data;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchGreeting.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isFulfilled = true;
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    });
  },
});

export default greetingSlice;
export { FetchGreeting };
