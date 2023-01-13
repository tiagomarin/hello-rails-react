import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const getGreetingMessage = createAsyncThunk(
  'greetings/getGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/greetings/message');
    return response.json()
  },
);

const initialState = {
  message: [],
  status: 'idle',
};

// Then, handle actions in your reducers:
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getGreetingMessage.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.status = 'succeeded';
    });
    builder.addCase(getGreetingMessage.pending, (state, action) => {
      state.status = 'loading';
    });
  },
});

// Action creators are generated for each case reducer function
export const { greetingsReducer } = greetingsSlice.actions;

export default greetingsSlice.reducer;