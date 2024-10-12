import { createSlice } from "@reduxjs/toolkit";

const coinBankSlice = createSlice({
  name: "coin-bank",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 100;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 100;
      }
    },
    customInput: (state, action) => {
      state.value += action.payload * 1000;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, customInput, reset } = coinBankSlice.actions;

export default coinBankSlice.reducer;
