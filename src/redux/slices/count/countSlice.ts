import { createSlice } from '@reduxjs/toolkit';

type CountState = {
  value: number;
};

export const initialState: CountState = {
  value: 0,
};

const countSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    setCount(state, action) {
      state.value = action.payload;
    },
  },
});

export const { increment, setCount } = countSlice.actions;

export default countSlice.reducer;
