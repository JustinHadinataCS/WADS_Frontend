import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
  unreadCount: 0,
  isLoading: null,
  error: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    testNotif(state) {
      state.isLoading = true;
    },
  },
});

export const { testNotif } = notificationSlice.actions;

export default notificationSlice.reducer;
