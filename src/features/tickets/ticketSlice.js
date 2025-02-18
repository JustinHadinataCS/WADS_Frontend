import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  ticketDetails: null,
  isLoading: null,
  error: null,
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    testRedux(state, action) {
      state.testing = action.payload;
    },
  },
});

export const { testRedux } = ticketSlice.actions;

export default ticketSlice.reducer;
