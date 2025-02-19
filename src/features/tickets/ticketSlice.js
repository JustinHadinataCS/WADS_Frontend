import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  ticketDetails: null,
  isLoading: null,
  error: null,
  test: false,
  count: 0,
};

// ticket: {
// }

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    testRedux(state, action) {
      state.count += action.payload;
    },
  },
});

export const { testRedux } = ticketSlice.actions;

export default ticketSlice.reducer;

export const getTest = (state) => state.ticket.count;
