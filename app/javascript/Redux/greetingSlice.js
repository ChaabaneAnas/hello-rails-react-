import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await fetch("http://127.0.0.1:3000/api/v1/users/1/greetings");
    const data = await response.json();
    return data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {
    addGreeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => action.payload
  },
});


export const { addGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;