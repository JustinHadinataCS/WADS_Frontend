import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./features/tickets/ticketSlice";
import notificationReducer from "./features/notifications/notificationSlice";
const store = configureStore({
  reducer: { ticket: ticketReducer, notification: notificationReducer },
});

// const store = configureStore({
//   reducer: { ticket: ticketReducer, notifcation: notificationReducer },
// });
export default store;
