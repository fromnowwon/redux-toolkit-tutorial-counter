import { createSlice } from "@reduxjs/toolkit";

// reducer와  action 통합된 작은 store
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    subtract: (state, action) => {
      state.value -= action.payload;
    }
  }
})

export default counterSlice;